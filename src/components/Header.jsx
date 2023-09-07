import React from "react";
import Nav from "./Nav";

const Header = (props) => {
    return (
      <div className="container">
        <header className="content">
          <div className="header">
            <Nav />
          </div>
        </header>
      </div>
    )
}

export default Header