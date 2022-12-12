import React from "react";
import Arum from "../../asset/img/jumbotron.jpg"
import { motion } from "framer-motion"

const jumbotron = () => {

    // const container = {
    //     visible: {
    //         transition: {
    //             staggerChildren: 0.025
    //         }
    //     }
    // };

    const item = {
        hidden: {
            y: "200%",
            transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 }
        },
        visible: {
            y: 0,
            transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 }
        }
    };


    return (
        <main className="container grid h-screen min-w-full items-center bg-no-repeat bg-center bg-cover lg:grid-cols-2" style={{ backgroundImage: `url(${Arum})` }}>
            <div className="px-6 md:px-16 text-center md:text-left">
                <span className="overflow-hidden inline-block">
                    <motion.h1 variants={item} initial="hidden" animate="visible" className="inline-block text-primary font-bold font-tungsten text-8xl tracking-wider md:text-9xl">ARUM</motion.h1>
                </span>
                <p className="text-lg text-third font-din md:text-xl">Sebuah drama yang menceritakan feminisme,
                    patriarki, dan toxic masculinity
                    yang kerap terjadi di indonesia
                </p>
            </div>

        </main >
    )
}

export default jumbotron;