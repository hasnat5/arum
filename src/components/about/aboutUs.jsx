import React from "react";
import { motion } from "framer-motion"
import hasnatDev from "../../asset/img/hasnat_dev.jpg";
import fadhliDev from "../../asset/img/fadhli_pengembang.jpg";

const aboutUs = () => {
    const item = {
        offscreen: {
            y: "200%",
            transition: {
                ease: [0.455, 0.03, 0.515, 0.955], duration: 1
            }
        },
        onscreen: {
            y: 0,
            transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.9 }
        }
    };

    return (
        <motion.div initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.1 }} className="grid gap-12 px-6 py-10 lg:px-16">
            <span className="overflow-hidden inline-block">
                <motion.h1 variants={item} className="text-secondary font-tungsten text-6xl lg:text-8xl">TENTANG PENGEMBANG</motion.h1>
            </span>

            {/* hasnat profile */}
            <div>
                <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1, transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85, delay: 0.6 } }} viewport={{ once: true, amount: 0.1 }} className="font-dinBold text-3xl lg:text-4xl text-secondary underline text-center mb-6 lg:mb-9">Hasnat Ferdiananda</motion.h2>

                <div className="grid items-center justify-items-center lg:px-24 lg:grid-cols-12">
                    <img src={hasnatDev} className="w-6/12 lg:w-full lg:order-2 mb-6 lg:mb-9 lg:col-span-2 lg:justify-self-end" alt="poto_developer" />
                    <p className="font-din text-lg text-fourth lg:col-span-10 lg:pr-9">Lahir tanggal 5 bulan desember. Seorang siswa yang tengah duduk dibangku SMK, menyukai pelajaran matematika. Memiliki ketertarikan pada bidang teknologi termasuk web design.</p>
                </div>
            </div>

            {/* fadhli profile */}
            <div>
                <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1, transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85, delay: 0.6 } }} viewport={{ once: true, amount: 0.1 }} className="font-dinBold text-3xl lg:text-4xl text-secondary underline text-center mb-6 lg:mb-9">Muhammad Fadhli Fathoni</motion.h2>

                <div className="grid items-center justify-items-center lg:px-24 lg:grid-cols-12">
                    <img src={fadhliDev} className="w-6/12 lg:w-full mb-6 lg:mb-9 lg:col-span-2" alt="poto_developer" />
                    <p className="font-din text-lg text-fourth lg:col-span-10 lg:pl-9">Seorang siswa SMK, lahir pada tanggal 17 Maret 2006 di bandung, yang sangat bersemangat dalam bidang yang ia minati, perjuangannya tidak lah mudah, malas bukan lah apa apa dihadapannya, dengan semangat nya yang tinggi ia dapat tetap konsisten dalam menggapai cita cita yang ia inginkan</p>
                </div>
            </div>
        </motion.div >
    )
}

export default aboutUs;
