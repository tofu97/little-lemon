import ReservationHero from './ReservationHero'
import ReservationDetails from './ReservationDetails'
import Footer from './Footer'

function Reservation(props) {
  return (
    <>
      <main>
        <ReservationHero />
        <ReservationDetails times={props.times} submitForm={props.submitForm} />
      </main>
      <Footer />
    </>
  )
}

export default Reservation