import React from "react";
import lemon from "../assets/images/lemon.svg"

const Footer = (props) => {
    return (
      <div className="footer-container">
        <footer>
          <img src={lemon} alt="Little lemon logo" />
          <nav>
            <h3>Doormat Navigation</h3>
            <ul>
              <li><a href="/home">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/menu">Menu</a></li>
              <li><a href="/reservations">Reservations</a></li>
              <li><a href="/order">Order Online</a></li>
              <li><a href="/login">Login</a></li>
            </ul>
          </nav>
          <nav>
            <h3>Contact</h3>
            <ul>
              <li><a href="/address">Address</a></li>
              <li><a href="/phone">Phone number</a></li>
              <li><a href="/email">Email</a></li>
            </ul>
          </nav>
          <nav>
            <h3>Social media links</h3>
            <ul>
              <li><a href="/address">Address</a></li>
              <li><a href="/phone">Phone number</a></li>
              <li><a href="/email">Email</a></li>
            </ul>
          </nav>
        </footer>
      </div>
    )
}

export default Footer