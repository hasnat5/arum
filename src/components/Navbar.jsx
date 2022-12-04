import React from "react";
import { NavLink } from "react-router-dom";
import '../index.css';

const navbar = () => {
    return (
        <nav>
            <ul className="flex">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/actor">Aktor</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
            </ul>
        </nav>
    )
}

export default navbar;