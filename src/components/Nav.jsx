import React, { useState } from "react";
import logo from "../assets/images/Logo.svg"
import home from "../assets/images/home.svg"
import hamburger from "../assets/images/hamburger.svg"
import close from "../assets/images/close.svg"
import whiteHamburger from "../assets/images/hamburger_white.svg"
import { Link } from "react-router-dom"

const Nav = (props) => {
    const [menuOpen, setMenuOpen] = useState(false)

    const toggleMenuBar = (action) => (e) => {
        if (action === "open") {
            setMenuOpen(true)
        } else if (action === "close") {
            setMenuOpen(false)
        }
    }

    return (
        <nav>
            <span className="home-btn" aria-label="On click go to home page">
                <img src={home} alt="home" />
            </span>
            <img className="logo" src={logo} alt="Little Lemon Logo" />
            <div className="nav-bar">
            <ul 
                onClick={() => setMenuOpen(false)} 
                className={"nav-bar-item " + (!menuOpen ? "collapse" : "")}
            >
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
            <span 
                className="hamburger hamburger-menu nav-bar-item" 
                aria-label="On click show menu"
                onClick={toggleMenuBar("open")}
            >
                <img 
                    src={hamburger} 
                    alt="hamburger menu show" 
                    className={menuOpen ? "hide" : ""} 
                />
            </span>
            <span 
                className={"close hamburger-menu nav-bar-item " + (!menuOpen ? "collapse" : "")}
                aria-label="On click close menu"
                onClick={toggleMenuBar("close")}
            >
                <img src={close} alt="close menu" />
            </span>
            </div>
        </nav>
    )
}

export default Nav