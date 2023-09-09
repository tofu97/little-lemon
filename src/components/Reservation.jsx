import ReservationHero from './ReservationHero'
import ReservationDetails from './ReservationDetails'
import Footer from './Footer'

function Reservation(props) {
  return (
    <>
      <main>
        <ReservationHero />
        <ReservationDetails times={props.times} />
      </main>
      <Footer />
    </>
  )
}

export default Reservation