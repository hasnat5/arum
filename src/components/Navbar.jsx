import React from "react";
import { useState } from "react";
import logo from "../asset/icon/flower.png";
import { Divide as Hamburger } from 'hamburger-react'
import MobileNav from "./navigation/mobileNavigation";
import '../index.css';

const Navbar = () => {

    const [isOpen, setOpen] = useState(false)
    const closeMobileMenu = () => setOpen(false)

    return (
        <nav className="navBar fixed flex items-center bg-secondary justify-between h-16 px-4 z-10 w-full" >
            <div className="flex gap-4 items-center">
                <img src={logo} className="h-10" alt="logo" />
                <h2 className="text-third font-tungsten text-4xl tracking-wider">ARUM</h2>
            </div>


            {isOpen && <MobileNav isMobile={true} closeMobileMenu={closeMobileMenu} />}
            <Hamburger style={{ userSelect: "none" }} color="#ece8e1" toggled={isOpen} toggle={setOpen} size={24} />
        </nav >
    )
}

export default Navbar;