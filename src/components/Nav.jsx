import React from "react";
import logo from "../assets/images/Logo.svg"
import home from "../assets/images/home.svg"
import hamburger from "../assets/images/hamburger.svg"
import close from "../assets/images/close.svg"
import whiteHamburger from "../assets/images/hamburger_white.svg"
import { Link } from "react-router-dom"

const Nav = (props) => {
    return (
        <nav>
            <span className="home-btn" aria-label="On click go to home page">
                <img src={home} alt="home" />
            </span>
            <img className="logo" src={logo} alt="Little Lemon Logo" />
            <div className="nav-bar">
            <ul className="nav-bar-item collapse">
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
            <span className="hamburger hamburger-menu nav-bar-item" aria-label="On click show menu">
                <img src={whiteHamburger} alt="hamburger menu hide" className="hide" />
                <img src={hamburger} alt="hamburger menu show" className="show" />
            </span>
            <span className="close hamburger-menu nav-bar-item collapse" aria-label="On click close menu">
                <img src={close} alt="close menu" />
            </span>
            </div>
        </nav>
    )
}

export default Nav