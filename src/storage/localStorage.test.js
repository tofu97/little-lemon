import { saveReservation, readBookings } from "./localStorage";

test('Reservations are saved to local storage', () => {
    const date = "2023-09-12", time = "23:59"
    const key = `${date}@${time}`
    const reservation = {date, time}
    saveReservation(reservation)

    // tests both write and read
    expect(localStorage.length).toEqual(1)
    const bookings = readBookings()
    expect(bookings).toBeTruthy()
    const bookingsObj = JSON.parse(bookings)
    expect(bookingsObj[key]).toEqual(reservation)
})