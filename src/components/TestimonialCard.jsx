const TestimonialCard = (props) => {
    const {
        score,
        image,
        review,
        name,
    } = props.testimonial

    const MAX_REVIEW_LENGTH = 10

    return (
        <article className="testimonial-card">
            <div className="col-1">
                <span className="testimonial-rating">
                    {"★".repeat(score) + "☆".repeat(5-score)}
                </span>
                <img src={image} alt="user" />
                <blockquote className="testimonial-review">
                    {review.length <= MAX_REVIEW_LENGTH 
                        ? review 
                        : review.substring(0, MAX_REVIEW_LENGTH - 3) + "..."}
                </blockquote>
            </div>
            <p className="col-1 testimonial-user">
                {name}
            </p>
        </article>
    )
}

export default TestimonialCard