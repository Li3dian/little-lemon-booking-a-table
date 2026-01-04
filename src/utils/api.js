// Dummy API functions (simulated) — similar to Meta Front-End Capstone
export function fetchAPI(date) {
  // Return a set of times; in a real app you'd fetch available slots for the date
  return ["17:00", "18:00", "19:00", "20:00", "21:00"];
}

export function submitAPI(formData) {
  // Simulate success (in real app you'd POST to server)
  console.log("Submitting booking", formData);
  return true;
}