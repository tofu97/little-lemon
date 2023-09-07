import React from "react";
import lemon from "../assets/images/lemon.svg"
import { Link } from "react-router-dom";

const Footer = (props) => {
    return (
      <div className="footer-container">
        <footer>
          <img src={lemon} alt="Little lemon logo" />
          <nav>
            <h3>Doormat Navigation</h3>
            <ul>
              <li>
                <Link to="/" className="nav-item">Home</Link>
              </li>
              <li>
                <Link to="/" className="nav-item">About</Link>
              </li>
              <li>
                <Link to="/" className="nav-item">Menu</Link>
              </li>
              <li>
                <Link to="/reservations" className="nav-item">Reservations</Link>
              </li>
              <li>
                <Link to="/" className="nav-item">Order online</Link>
              </li>
              <li>
                <Link to="/" className="nav-item">Login</Link>
              </li>
            </ul>
          </nav>
          <nav>
            <h3>Contact</h3>
            <ul>
              <li>
                <Link to="/" className="nav-item">Address</Link>
              </li>
              <li>
                <Link to="/" className="nav-item">Phone number</Link>
              </li>
              <li>
                <Link to="/" className="nav-item">Email</Link>
              </li>
            </ul>
          </nav>
          <nav>
            <h3>Social media links</h3>
            <ul>
              <li>
                <Link to="/" className="nav-item">Address</Link>
              </li>
              <li>
                <Link to="/" className="nav-item">Phone number</Link>
              </li>
              <li>
                <Link to="/" className="nav-item">Email</Link>
              </li>
            </ul>
          </nav>
        </footer>
      </div>
    )
}

export default Footer