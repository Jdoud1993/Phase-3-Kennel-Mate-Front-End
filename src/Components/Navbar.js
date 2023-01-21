import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <div id="Navbar">
            <div id="navigation">
                <NavLink
                    to="/"
                    exact
                >Home</NavLink>
                <NavLink
                    to="/Shelters"
                    exact
                >Shelters</NavLink>
                <NavLink
                    to="/Animals"
                    exact
                >Animals</NavLink>
                <NavLink
                    to="/Form"
                    exact
                >Add Animal</NavLink>
            </div>
        </div>
    )
}

export default Navbar