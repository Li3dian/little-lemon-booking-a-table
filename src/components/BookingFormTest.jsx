import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import BookingForm from "./BookingForm";
import { fetchAPI, submitAPI } from "../utils/api";

jest.mock("../utils/api", () => ({
  fetchAPI: jest.fn(),
  submitAPI: jest.fn(),
}));

const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("BookingForm", () => {
  beforeEach(() => {
    fetchAPI.mockReturnValue(["17:00", "18:00", "19:00"]);
  });

  test("controleert of de initiële waarden correct zijn", () => {
    render(
      <BrowserRouter>
        <BookingForm />
      </BrowserRouter>
    );

    expect(screen.getByLabelText(/Aantal personen:/i)).toHaveValue(2);
    expect(screen.getByLabelText(/Gelegenheid:/i)).toHaveValue("Birthday");
  });

  test("updatet de beschikbare tijden wanneer de datum verandert", () => {
    render(
      <BrowserRouter>
        <BookingForm />
      </BrowserRouter>
    );

    const dateInput = screen.getByLabelText(/Datum:/i);
    fireEvent.change(dateInput, { target: { value: "2026-12-25" } });

    expect(fetchAPI).toHaveBeenCalledWith("2026-12-25");
  });

  test("navigeert naar de bevestigingspagina bij een succesvolle submit", () => {
    submitAPI.mockReturnValue(true);

    render(
      <BrowserRouter>
        <BookingForm />
      </BrowserRouter>
    );


    fireEvent.change(screen.getByLabelText(/Tijd:/i), { target: { value: "18:00" } });
    const submitButton = screen.getByRole("button", { name: /Reserve/i });
    fireEvent.click(submitButton);

    expect(submitAPI).toHaveBeenCalled();
    expect(mockNavigate).toHaveBeenCalledWith("/confirmed");
  });
});