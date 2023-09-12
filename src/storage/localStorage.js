export const storageKey = "littleLemonBookings"

export const saveReservation = (reservation) => {
    const storedBookings = localStorage.getItem(storageKey)
    let bookings
    if (storedBookings === null) {
        bookings = {}
    } else {
        bookings = JSON.parse(storedBookings)
    }
    const key = `${reservation.date}@${reservation.time}`
    bookings[key] = reservation
    localStorage.setItem(storageKey, JSON.stringify(bookings))
}