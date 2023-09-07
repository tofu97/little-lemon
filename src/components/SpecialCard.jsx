const SpecialCard = (props) => {
    const {
        name,
        alt,
        price,
        description,
        img,
    } = props.special

    return (
        <article className="special-card">
            <img src={img} alt={alt} />
            <div className="special-card-info">
                <div className="special-card-header">
                    <h3 className="special-title">{name}</h3>
                    <h3 className="price">${price}</h3>
                </div>
                <p>{description}</p>
                <a href="/#">Order a delivery</a>
            </div>
        </article>
    )
}

export default SpecialCard