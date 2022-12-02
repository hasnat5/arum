import React from "react";
import { Link } from "react-router-dom";

const navbar = () => {
    return (
        <nav>
            <ul className="flex">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/aktor">Aktor</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </nav>
    )
}

export default navbar;