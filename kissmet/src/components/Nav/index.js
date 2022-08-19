import React from 'react';
import logo from "../../assets/logo.png";
import matches from "../../assets/matches.png";

export const Nav = () => {

    return (
        <header>
        <nav className="navbar">
            <a href="/" >
                <img src={logo} style={{ width: "15%"}}></img>
            </a>
            <section className = "navs">
                <a href="/" >
                    <img src={matches} style={{ width: "35%"}}></img>
                </a>
            </section>
        </nav>
        </header>
    )
}


