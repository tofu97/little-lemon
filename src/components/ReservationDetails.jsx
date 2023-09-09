import BookingForm from "./BookingForm"

const ReservationDetails = (props) => {
    return (
        <section className="container">
          <div className="content">
            <BookingForm times={props.times} submitForm={props.submitForm} />
          </div>
        </section>
    )
}

export default ReservationDetails