import happyChef from "../assets/images/restaurant chef B 2.jpg"
import cooks from "../assets/images/Mario and Adrian A.jpg"

const Chicago = (props) => {
    return (
        <section className="chicago">
          <div className="container">
            <div className="content">
                <article className="chicago-info">
                    <div className="chicago-story">
                        <h1>Little Lemon</h1>
                        <h3>Chicago</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    </div>
                    <div className="chicago-images-container">
                        <div className="chicago-images">
                            <img src={happyChef} alt="Adrian completing a dish" />
                            <img src={cooks} alt="Mario and Adrian in kitchen" />
                        </div>
                    </div>
                </article>
            </div>
          </div>
        </section>
    )
}

export default Chicago