import { useEffect, useState } from 'react'
import Footer from './Footer'
import { readBookings, deleteBookingByKey } from '../storage/localStorage'

function ConfirmedBooking(props) {
  const [bookings, setBookings] = useState("")

  useEffect(() => {
    const storedBookings = readBookings()
    
    if (storedBookings === null) {
      console.error("Error retrieving from local storage")
      return
    }
    setBookings(storedBookings)
  }, [bookings])

  let bookingsList = []
  if (bookings) {
    let bookingsObj
    try {
      bookingsObj = JSON.parse(bookings)
    } catch (error) {
      console.error("Error reading bookings", error)
    }

    for (const [bookingKey, b] of Object.entries(bookingsObj)) {
      const {
        date,
        time,
        firstName,
        lastName,
        email,
        diners,
      } = b

      bookingsList.push({
        date,
        time,
        firstName,
        lastName,
        email,
        diners,
        bookingKey,
      })
    }
  }


  const deleteBooking = (bookingKey) => (_) => {
    deleteBookingByKey(bookingKey)
    setBookings("")
  }

  return (
    <>
      <main>
        <div id="bookings">
          <div className="container">
            <div className="content">
              <h1>Reservation Confirmed</h1>
              <h3>Bookings</h3>
              <ul>
                {bookingsList.map(({
                    date,
                    time,
                    firstName,
                    lastName,
                    email,
                    diners,
                    bookingKey,
                }) => {
                  return (
                    <li key={bookingKey}>
                      <span 
                        aria-label="Booking field" 
                        className="booking-field"
                      >
                        <span className="booking-value-field">{date} at {time}</span>
                        <span className="booking-value-field">{firstName} {lastName}</span>
                        <span className="booking-value-field">{email}</span>
                        <span className="booking-value-field">{diners} diners</span>
                        <button 
                          className="submit-btn-sm"
                          onClick={deleteBooking(bookingKey)}
                        >
                          Delete booking
                        </button>
                      </span>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default ConfirmedBooking 