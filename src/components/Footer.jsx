import React from "react";
import instagram from "../asset/icon/icons8-instagram.svg";
import youtube from "../asset/icon/icons8-youtube.svg";

const footer = () => {
    return (
        <footer className="grid container min-w-full bg-fifth px-6 lg:px-16 py-6 gap-6">
            <div className="grid gap-3">
                <div className="flex gap-3 items-center">
                    <h1 className="text-third font-tungsten text-3xl md:text-4xl tracking-wider">XI PPLG 2</h1>
                </div>
                <p className="text-third font-din text-sm md:text-base">Sekilas tentang PPLG 2</p>
            </div>

            <div className="text-third">
                <h2 className="font-dinBold md:text-lg mb-4">SOSIAL MEDIA</h2>
                <ul className="font-din text-fourth flex gap-3">
                    <li><a href="https://www.instagram.com/pplgtwooo_/" target="_blank" rel="noopener noreferrer"><img src={instagram} alt="instagram-logo" /></a></li>
                    <li><a href="https://www.youtube.com/@pplgtwoofus9054" target="_blank" rel="noopener noreferrer"><img src={youtube} alt="youtube-logo" /></a></li>
                </ul>
            </div>

            <hr className="border-third" />

            <div>
                <p className="text-fourth font-din text-base">Copyright © 2022 <a className="text-third underline" href="https://github.com/hasnat5/arum" target="_blank" rel="noopener noreferrer">arum</a>.</p>
            </div>
        </footer >
    )
}

export default footer;