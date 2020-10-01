import React, { useState } from 'react';
import logo from '../images/logo.svg'
import { FaAlignRight } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
const NavBarTogglerIfElse = () => {

    const [toggleNav, setToggleNav] = useState("nav-links");

    const toggleHandel = () => {

        if (toggleNav === "nav-links") {
            setToggleNav("nav-links show-nav")
        }
        else {
            setToggleNav("nav-links")
        }
    }
    return (
        <nav className="navbar">
            <div className="nav-center">
                <div className="nav-header">
                    <Link to="/">
                        <img src={ logo } alt="Beach Resort Logo" />
                    </Link>
                    <button type="button" className="nav-btn" onClick={ toggleHandel }>
                        <FaAlignRight className="nav-icon" />
                    </button>
                </div>
                <ul className={ toggleNav }>
                    <li>
                        <NavLink exact activeClassName="active" to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink exact activeClassName="active" to="/rooms">Room</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBarTogglerIfElse;