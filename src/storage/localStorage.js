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

export const readBookings = () => {
    const storedBookings = localStorage.getItem(storageKey)
    return storedBookings || ""
}

export const deleteBookingByKey = (bookingKey) => {
    const storedBookings = localStorage.getItem(storageKey)
    let bookingsObj
    if (storedBookings === null) {
        bookingsObj = {}
    } else {
        bookingsObj = JSON.parse(storedBookings)
    }
    delete bookingsObj[bookingKey]
    localStorage.setItem(storageKey, JSON.stringify(bookingsObj))
}