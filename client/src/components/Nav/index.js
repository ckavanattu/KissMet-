import React from 'react';
import logo from "../../assets/logo.png";
import matches from "../../assets/matches.png";
import { Link } from "react-router-dom";

export const Nav = () => {

    return (
        <header>
        <nav className="navbar">
            <Link to="/">
                <img src={logo} style={{ width: "15%"}}></img>
            </Link>
            
            <section className = "navs">
                <Link to="/chat">
                    <img src={matches} style={{ width: "35%"}}></img>
                </Link>
                <img></img>
            </section>
        </nav>
        </header>
    )
}


