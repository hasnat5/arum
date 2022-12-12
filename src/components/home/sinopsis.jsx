import React from "react";
import { motion } from "framer-motion";


const Sinopsis = () => {

    const item = {
        offscreen: {
            y: "200%",
            transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 1 }
        },
        onscreen: {
            y: 0,
            transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.9 }
        },
    };

    return (
        <motion.section initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.1 }} className="container m-auto min-w-full bg-third pt-12 px-6 py-10 md:px-16">
            <span className="inline-block overflow-hidden">
                <motion.h1 variants={item} className="text-secondary font-bold font-tungsten text-6xl tracking-wider md:text-9xl md:tracking-normal">SINOPSIS</motion.h1>
            </span>
            <div className="lg:grid lg:grid-cols-2 lg:items-center gap-6 mt-9 lg:mt-14">
                <div>
                    <p className="text-fourth font-din text-lg lg:pl-32">Menceritakan tentang tekanan sosial yang kerap dialami oleh perempuan dan laki-laki dimana perempuan tidak bisa mendapatkan hak-haknya dan laki-laki yang dituntut untuk selalu menjadi pribadi yang kuat dan tidak boleh lemah. Tentang perempuan yang selalu di diskriminasi serta laki-laki yang selalu harus mengikuti standar sosial yang berlaku
                    </p>
                </div>

                <div className="relative">
                    <div className="absolute -left-6 lg:left-7 top-5 bg-primary px-7 py-1">
                        <p className="text-white font-dinBold text-base">TRAILER</p>
                    </div>

                    <iframe className="mt-16 mb-8 md:mt-0 md:mb-0 lg:pl-12" width="100%" height="250px" src="https://www.youtube.com/embed/6AA9rR6umnE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>


        </motion.section>
    )
}

export default Sinopsis;