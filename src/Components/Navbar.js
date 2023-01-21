import React from "react";
import { Navlink } from "react-router-dom";

function Navbar() {
    return (
        <div id="Navbar">
            <Navlink
                to="/"
                exact
                style={""}
                activeStyle={{}}
            >Home</Navlink>
             <Navlink
                to="/Shelters"
                exact
                style={""}
                activeStyle={{}}
            >Shelters</Navlink>
             <Navlink
                to="/Animals"
                exact
                style={""}
                activeStyle={{}}
            >Animals</Navlink>
             <Navlink
                to="/Form"
                exact
                style={""}
                activeStyle={{}}
            >Add Animal</Navlink>
        </div>
    )
}

export default Navbar