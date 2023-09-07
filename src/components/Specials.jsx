import greekSalad from "../assets/images/greek-salad.png"
import lemonDessert from "../assets/images/lemon-dessert.png"
import SpecialCard from "./SpecialCard"

const specials = [
    {
        name: "Greek Salad",
        price: "12.99",
        description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
        img: greekSalad,
        alt: "Greek salad",
    }, {
        name: "Bruschetta",
        price: "5.99",
        description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
        img: greekSalad,
        alt: "Bruschetta",
    }, {
        name: "Lemon Dessert",
        price: "5.00",
        description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
        img: lemonDessert,
        alt: "Lemon Dessert",
    },
]

const Specials = (props) => {
    return (
        <section className="specials">
          <div className="container">
            <div className="content">
                <div className="specials-header">
                    <h1>This weeks specials!</h1>
                    <button className="submit-btn">Online Menu</button>
                </div>
                <section className="special-cards">
                    { specials.map((item) => {
                        return <SpecialCard special={item} key={item.name} />
                    })}
                </section>
            </div>
          </div>
        </section>
    )
}

export default Specials