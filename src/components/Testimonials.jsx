import user from "../assets/images/User.svg"
import TestimonialCard from "./TestimonialCard"

const reviews = [
    {
        name: "Tony Baloney",
        review: "I like to eat",
        score: 4,
        image: user,
    }, {
        name: "Alice Toast",
        review: "Lorem ipsum dolor sit amet",
        score: 3,
        image: user,
    }, {
        name: "Fabio Drizzi",
        review: "Amazing!",
        score: 5,
        image: user,
    }, {
        name: "Bob Smith",
        review: "Lorem ipsum dolor sit amet",
        score: 2,
        image: user,
    }
]

const Testimonials = (props) => {
    const score = 4
    return (
        <section className="testimonials">
          <div className="container">
            <div className="content">
                <div className="testimonials-header">
                    <h1>Testimonials</h1>
                </div>
                <section className="testimonial-cards">
                    {reviews.map((item) => <TestimonialCard testimonial={item} />)}
                </section>
            </div>
          </div>
        </section>
    )
}

export default Testimonials