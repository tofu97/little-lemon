import Header from './Header'
import ReservationHero from './ReservationHero'
import ReservationDetails from './ReservationDetails'
import Footer from './Footer'

function Reservation() {
  return (
    <>
      <Header />
      <main>
        <ReservationHero />
        <ReservationDetails />
      </main>
      <Footer />
    </>
  )
}

export default Reservation