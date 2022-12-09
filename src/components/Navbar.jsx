import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Divide as Hamburger } from 'hamburger-react'
import MobileNav from "./navigation/mobileNavigation";
import '../index.css';
import "../components/navigation/mobileNavigation.css";

const Navbar = () => {

    const [isOpen, setOpen] = useState(false)
    const closeMobileMenu = () => setOpen(false)

    return (
        <nav className="fixed flex items-center bg-fifth justify-between h-16 px-4 z-20 w-full lg:px-16" >
            <div className="flex gap-4 items-center">
                <h2 className="text-third font-tungsten text-4xl tracking-wider">XI PPLG 2</h2>
            </div>

            <div className="hidden lg:block">
                <ul className="flex gap-6 font-dinBold text-third text-base">
                    <li><NavLink to="/">Beranda</NavLink></li>
                    <li><NavLink to="/aktor">Aktor</NavLink></li>
                    <li><NavLink to="/tentang">Tentang</NavLink></li>
                </ul>
            </div>

            {isOpen && <MobileNav isMobile={true} closeMobileMenu={closeMobileMenu} />}
            <div className="lg:hidden">
                <Hamburger style={{ userSelect: "none" }} color="#ece8e1" toggled={isOpen} toggle={setOpen} size={24} />
            </div>
        </nav >
    )
}

export default Navbar;