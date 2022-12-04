import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../asset/icon/flower.png";
import '../index.css';

const navbar = () => {
    return (
        <nav className="fixed flex items-center justify-between bg-secondary h-16 px-4 z-20 w-full">
            <div className="flex gap-4 items-center">
                <img src={logo} className="h-10" alt="logo" />
                <h2 className="text-third font-tungsten text-4xl tracking-wider">ARUM</h2>
            </div>
            <ul className="flex text-white">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/actor">Aktor</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
            </ul>
        </nav>
    )
}

export default navbar;