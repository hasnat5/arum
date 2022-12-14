import React from "react";
import { Link } from "react-router-dom";
import Aktor from './../../asset/img/1.png';
import { motion } from "framer-motion"

const listAktor = () => {

    const item = {
        offscreen: {
            y: "200%",
            transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 }
        },
        onscreen: {
            y: 0,
            transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 }
        }
    };

    return (
        <motion.section initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.1 }} className="container min-w-full bg-primary pt-12">
            <div className="relative grid justify-items-center px-6 pt-10 lg:grid-cols-2 lg:px-16">
                <div className="grid lg:order-2 gap-9 lg:pb-16">
                    <span className="overflow-hidden inline-block">
                        <motion.h1 variants={item} className="text-third font-bold font-tungsten text-left text-6xl tracking-wider md:text-9xl lg:tracking-normal">AKTOR</motion.h1>
                    </span>
                    <p className="text-third font-din text-lg">  Dibalik drama ini terdapat aktor aktor hebat di dalamnya, selain menyimpan cerita di balik layar kami pun menyimpan kenangan di dalamnya, Mari berkenalan dengan aktor drama Arum PPLG 2 </p>
                    <div className="hidden lg:block">
                        <Link to="/aktor" className="inline-block text-secondary font-dinBold text-base bg-third py-4 px-7">LIHAT SEMUA AKTOR</Link>
                    </div>
                </div>

                <div className="grid justify-items-center lg:order-1 lg:items-end">
                    <img src={Aktor} className="w-full pt-16" alt="aktor" />
                </div>

                <div className="absolute bottom-12 lg:static lg:bottom-auto lg:hidden">
                    <Link to="/aktor" className=" inline-block text-secondary font-dinBold text-base bg-third py-4 px-7">LIHAT SEMUA AKTOR</Link>
                </div>
            </div>

        </motion.section>
    )
}

export default listAktor;