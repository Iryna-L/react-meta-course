import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from './BookingForm';
const mockTimes ={times: ['16:00', '17:00', '18:00', '19:00', '20:00']}
const mockSetAvailableTimes =jest.fn()
const mockSubmitForm =jest.fn()
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
        submitForm={mockSubmitForm}/>);
    const guestsInput = screen.getByLabelText("Guests");
    expect(guestsInput).toHaveValue(2);
})

// Test to ensure that the occasion select dropdown renders with the correct initial value
test('Renders the occasion select dropdown with the correct initial value', () => {
    render(<BookingForm
     availableTimes={mockTimes}
        setAvailableTimes={mockSetAvailableTimes}
        submitForm={mockSubmitForm} />);
    const occasionSelect = screen.getByLabelText("Occassion");
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

