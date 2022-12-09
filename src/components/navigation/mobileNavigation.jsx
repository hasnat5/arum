import React from "react";
import { NavLink } from "react-router-dom";
import "../navigation/mobileNavigation.css";

const nav = (props) => {
    return (
        <ul className="absolute grid gap-4 content-center justify-center text-center top-0 left-0 bg-secondary font-tungsten text-4xl text-white w-screen h-screen">
            <li onClick={() => props.isMobile && props.closeMobileMenu()}><NavLink to="/">Beranda</NavLink></li>
            <li onClick={() => props.isMobile && props.closeMobileMenu()}><NavLink to="/aktor">Aktor</NavLink></li>
            <li onClick={() => props.isMobile && props.closeMobileMenu()}><NavLink to="/tentang">Tentang</NavLink></li>
        </ul>
    )
}

export default nav;