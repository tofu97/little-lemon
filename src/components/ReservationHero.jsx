import React from "react";
import tablePhoto from "../assets/images/Table photo.jpg"

const ReservationHero = (props) => {
    return (
        <section className="hero reservation-hero">
          <div className="container">
            <div className="content">
              <div className="reservation-header">
                <h1>Reserve Table</h1>
                <h3>Choose the date, number of diners, and then select from an available time</h3>
                <img className="heroImage" src={tablePhoto} alt="Little Lemon restaurant dining area" />
              </div>
            </div>
          </div>
        </section>
    )
}

export default ReservationHero