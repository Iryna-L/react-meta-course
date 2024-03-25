import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from './BookingForm';
const mockTimes = { times: ['16:00', '17:00', '18:00', '19:00', '20:00'] }
const mockSetAvailableTimes = jest.fn()
const mockSubmitForm = jest.fn()
// Test to ensure that the heading "Book Now" is rendered
test('Renders the BookingForm heading', () => {
  render(<BookingForm
    availableTimes={mockTimes}
    setAvailableTimes={mockSetAvailableTimes}
    submitForm={mockSubmitForm} />);
  const headingElement = screen.getByText("Book Now");
  expect(headingElement).toBeInTheDocument();
})

// Test to ensure that the date input field renders with the correct initial value
test('Renders the date input field with the correct initial value', () => {
  render(<BookingForm
    availableTimes={mockTimes}
    setAvailableTimes={mockSetAvailableTimes}
    submitForm={mockSubmitForm} />);
  const dateInput = screen.getByLabelText("Date");
  expect(dateInput).toHaveAttribute('type', 'date');
})

// Test to ensure that the time select dropdown renders with the correct initial value
test('Renders the time select dropdown with the correct initial value', () => {
  render(<BookingForm
    availableTimes={mockTimes}
    setAvailableTimes={mockSetAvailableTimes}
    submitForm={mockSubmitForm} />);
  const timeSelect = screen.getByLabelText("Time");
  expect(timeSelect).toHaveValue("17:00");
})

// Test to ensure that the guests input field renders with the correct initial value
test('Renders the guests input field with the correct initial value', () => {
  render(<BookingForm
    availableTimes={mockTimes}
    setAvailableTimes={mockSetAvailableTimes}
    submitForm={mockSubmitForm} />);
  const guestsInput = screen.getByLabelText("Guests");
  expect(guestsInput).toHaveValue(2);
})

// Test to ensure that the occasion select dropdown renders with the correct initial value
test('Renders the occasion select dropdown with the correct initial value', () => {
  render(<BookingForm
    availableTimes={mockTimes}
    setAvailableTimes={mockSetAvailableTimes}
    submitForm={mockSubmitForm} />);
  const occasionSelect = screen.getByLabelText("Occasion");
  expect(occasionSelect).toHaveValue("none");
})

// Test to simulate changing the date and verify the date change handler is called
test('Handles date change correctly', () => {
  render(<BookingForm
    availableTimes={mockTimes}
    setAvailableTimes={mockSetAvailableTimes}
    submitForm={mockSubmitForm} />);
  const dateInput = screen.getByLabelText("Date");
  fireEvent.change(dateInput, { target: { value: '2024-03-27' } });
  expect(dateInput).toHaveValue('2024-03-27');
})

// Test to ensure that the submit button calls the submitForm function with the correct reservation data
test('Submit button calls submitForm function with correct data', () => {
  render(<BookingForm submitForm={mockSubmitForm} availableTimes={mockTimes}
    setAvailableTimes={mockSetAvailableTimes} />);
  // Fill in form data
  const dateInput = screen.getByLabelText("Date");
  fireEvent.change(dateInput, { target: { value: '2024-03-27' } });

  const timeSelect = screen.getByLabelText("Time");
  fireEvent.change(timeSelect, { target: { value: '18:00' } });

  const guestsInput = screen.getByLabelText("Guests");
  fireEvent.change(guestsInput, { target: { value: '4' } });

  const occasionSelect = screen.getByLabelText("Occasion");
  fireEvent.change(occasionSelect, { target: { value: 'Birthday' } });

  // Submit form
  const submitButton = screen.getByRole("button", { name: /Confirm Reservation/i });
  fireEvent.click(submitButton);

  // Verify that submitForm function is called with the correct reservation data
  expect(mockSubmitForm).toHaveBeenCalledWith({
    date: '2024-03-27',
    time: '18:00',
    guests: '4',
    occasion: 'Birthday'
  });
})

