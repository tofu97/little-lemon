import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

test('Renders the Booking form instructions', () => {
    const availableTimes = ["12:01"]
    render(<BookingForm times={{availableTimes}} />)
    const text = `Enter customer contact information, and credit card number to confirm reservation.`
    const instructionText = screen.getByText(text)
    expect(instructionText).toBeInTheDocument()
})