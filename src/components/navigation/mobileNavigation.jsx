import React from "react";
import { NavLink } from "react-router-dom";

const nav = (props) => {
    return (
        <ul id="navbar" className="navbar absolute grid gap-4 content-center justify-center top-0 left-0 bg-secondary font-tungsten text-4xl text-white w-screen h-screen">
            <li onClick={() => props.isMobile && props.closeMobileMenu()}><NavLink to="/">Home</NavLink></li>
            <li onClick={() => props.isMobile && props.closeMobileMenu()}><NavLink to="/actor">Aktor</NavLink></li>
            <li onClick={() => props.isMobile && props.closeMobileMenu()}><NavLink to="/about">About</NavLink></li>
        </ul>
    )
}

export default nav;