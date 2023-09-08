import React from "react";
import servingFood from "../assets/images/serving-food.png"
import { Link } from "react-router-dom";

const Hero = (props) => {
    return (
        <section className="hero">
          <div className="container">
            <div className="content">
              <div className="hero-header-hero reservation-header">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>We are a familiy owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                <img className="heroImage" src={servingFood} alt="Little Lemon restaurant dining area" />
                <div className="hero-reserve-button">
                    <Link to="/reservations">
                      <button className="submit-btn">Reserve Table</button>
                    </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
    )
}

export default Hero