import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import "../navigation/mobileNavigation.css";

const nav = (props) => {
    return (
        <AnimatePresence>
            <motion.ul initial={{ opacity: 0, transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.2 } }}
                animate={{ opacity: 1, transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.3 } }}
                exit={{ opacity: 0 }} className="absolute grid gap-4 content-center justify-center text-center top-0 left-0 bg-secondary font-tungsten text-4xl text-white w-screen h-screen">
                <li onClick={() => props.isMobile && props.closeMobileMenu()}><NavLink to="/">Beranda</NavLink></li>
                <li onClick={() => props.isMobile && props.closeMobileMenu()}><NavLink to="/aktor">Aktor</NavLink></li>
                <li onClick={() => props.isMobile && props.closeMobileMenu()}><NavLink to="/tentang">Tentang</NavLink></li>
            </motion.ul>
        </AnimatePresence>
    )
}

export default nav;