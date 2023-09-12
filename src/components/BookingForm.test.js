import { render, screen, queryByAttribute, fireEvent } from "@testing-library/react";
import BookingForm from "./BookingForm";

test('Renders the Booking form instructions', () => {
    const availableTimes = ["12:01"]
    const dispatchAvailableTimes = () => {}
    render(<BookingForm times={{availableTimes, dispatchAvailableTimes}} />)
    const text = `Enter customer contact information, and credit card number to confirm reservation.`
    const instructionText = screen.getByText(text)
    expect(instructionText).toBeInTheDocument()
})

test('All required form input fields have required attribute', () =>{
    const availableTimes = ["12:01"]
    const dispatchAvailableTimes = () => {}
    render(<BookingForm times={{availableTimes, dispatchAvailableTimes}} />)
    
    const firstNameInput = screen.getByLabelText("First name")
    expect(firstNameInput.getAttribute("required")).not.toEqual(null)

    const lastNameInput = screen.getByLabelText("Last name")
    expect(lastNameInput.getAttribute("required")).not.toEqual(null)
    
    const emailInput = screen.getByLabelText("Email address")
    expect(emailInput.getAttribute("required")).not.toEqual(null)

    const creditCardInput = screen.getByLabelText("Credit card number")
    expect(creditCardInput.getAttribute("required")).not.toEqual(null)
    
    const cvvInput = screen.getByLabelText("CVV")
    expect(cvvInput.getAttribute("required")).not.toEqual(null)
})

test('Form submit is disabled if there are no available times for the selected date', () => {
    const availableTimes = []
    const dispatchAvailableTimes = () => {}
    render(<BookingForm times={{availableTimes, dispatchAvailableTimes}} />)

    const errorMessage = screen.getByText("No available times")
    expect(errorMessage).toBeTruthy()

    const submitButton = screen.getByTestId("reservation-submit-btn")
    expect(submitButton).toHaveAttribute('disabled')
})

test('Invalid credit card errors are displayed and form submit is disabled', () => {
    const availableTimes = ["12:00"]
    const dispatchAvailableTimes = () => {}
    render(<BookingForm times={{availableTimes, dispatchAvailableTimes}} />)

    const creditCardInput = screen.getByLabelText("Credit card number")
    fireEvent.change(creditCardInput, {target: {value: "123"}})
    fireEvent.blur(creditCardInput)
    const errorMessage = screen.getByText("Please enter a valid 16 digit credit card number")
    expect(errorMessage).toBeTruthy()
    const submitButton = screen.getByTestId("reservation-submit-btn")
    expect(submitButton).toHaveAttribute('disabled')

    const cvvInput = screen.getByLabelText("CVV")
    fireEvent.change(cvvInput, {target: {value: "abc"}})
    fireEvent.blur(cvvInput)
    const cvvErrorMessage = screen.getByText("Please enter a 3 to 4 digit CVV")
    expect(cvvErrorMessage).toBeTruthy()
    const submitButton2 = screen.getByTestId("reservation-submit-btn")
    expect(submitButton2).toHaveAttribute('disabled')
})

test('Form submit is enabled when all fields are valid', () => {
    const time = "12:00"
    const availableTimes = [time]
    const date = "2023-09-14"
    const dispatchAvailableTimes = () => {}
    render(<BookingForm times={{availableTimes, dispatchAvailableTimes}} dateStr={date} />)

    const dateInput = screen.getByLabelText("Date")
    expect(dateInput.value).toEqual(date)

    const dinersInput = screen.getByLabelText("Number of diners")
    expect(dinersInput.value).toEqual("1")

    const timeInput = screen.getByLabelText("Time")
    expect(timeInput.value).toEqual(time)

    const occasionInput = screen.getByLabelText("Occasion")
    expect(occasionInput.value).not.toBeTruthy()

    const firstName = screen.getByLabelText("First name")
    fireEvent.change(firstName, {target: {value: "Bob"}})

    const lastName = screen.getByLabelText("Last name")
    fireEvent.change(lastName, {target: {value: "Smith"}})
    
    const email = screen.getByLabelText("Email address")
    fireEvent.change(email, {target: {value: "bob@example.com"}})

    const creditCardInput = screen.getByLabelText("Credit card number")
    fireEvent.change(creditCardInput, {target: {value: "1111222233334444"}})
    
    const cvvInput = screen.getByLabelText("CVV")
    fireEvent.change(cvvInput, {target: {value: "123"}})

    fireEvent.blur(cvvInput)

    const submitButton = screen.getByTestId("reservation-submit-btn")
    expect(submitButton).not.toHaveAttribute('disabled')
})

test('Form is submitted successfully with valid inputs', () => {
    const time = "12:00"
    const availableTimes = [time]
    const date = "2023-09-14"
    const dispatchAvailableTimes = () => {}

    const submitFn = jest.fn()

    render(<BookingForm times={{availableTimes, dispatchAvailableTimes}} dateStr={date} submitForm={submitFn} />)

    const firstName = "Bob",
          lastName = "Smith",
          email = "bob@example.com",
          creditCard = "1111222233334444",
          cvv = "123",
          diners = 1,
          occasion = ""

    const firstNameInput = screen.getByLabelText("First name")
    fireEvent.change(firstNameInput, {target: {value: firstName}})

    const lastNameInput = screen.getByLabelText("Last name")
    fireEvent.change(lastNameInput, {target: {value: lastName}})
    
    const emailInput = screen.getByLabelText("Email address")
    fireEvent.change(emailInput, {target: {value: email}})

    const creditCardInput = screen.getByLabelText("Credit card number")
    fireEvent.change(creditCardInput, {target: {value: creditCard}})
    
    const cvvInput = screen.getByLabelText("CVV")
    fireEvent.change(cvvInput, {target: {value: cvv}})

    fireEvent.blur(cvvInput)

    const submitButton = screen.getByTestId("reservation-submit-btn")

    fireEvent.click(submitButton)

    expect(submitFn).toHaveBeenCalled()
    expect(submitFn).toBeCalledWith({
        firstName,
        lastName,
        email,
        creditCard,
        cvv,
        diners,
        occasion,
        date,
        time,
    })
})

test('Form is not submitted with missing required HTML5 fields', () => {
    const time = "12:00"
    const availableTimes = [time]
    const date = "2023-09-14"
    const dispatchAvailableTimes = () => {}

    const submitFn = jest.fn()

    render(<BookingForm times={{availableTimes, dispatchAvailableTimes}} dateStr={date} submitForm={submitFn} />)

    const submitButton = screen.getByTestId("reservation-submit-btn")
    fireEvent.click(submitButton)
    expect(submitFn).not.toHaveBeenCalled()
})
