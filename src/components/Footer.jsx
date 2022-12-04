import React from "react";
import logo from "../asset/icon/flower.png";
import instagram from "../asset/icon/icons8-instagram.svg";
import youtube from "../asset/icon/icons8-youtube.svg";

const footer = () => {
    return (
        <footer className="grid container bg-secondary px-4 py-6 gap-6">
            <div className="grid gap-3">
                <div className="flex gap-3 items-center">
                    <img src={logo} className="h-6" alt="logo" />
                    <h1 className="text-third font-tungsten text-3xl tracking-wider">ARUM</h1>
                </div>
                <p className="text-third font-din text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error et, architecto ullam excepturi eveniet dolor!</p>
            </div>

            <div className="text-third">
                <h2 className="font-dinBold mb-4">SOSIAL MEDIA</h2>
                <ul className="font-din text-fourth flex gap-3">
                    <li><a href="https://www.instagram.com/pplgtwooo_/" target="_blank"><img src={instagram} alt="instagram-logo" /></a></li>
                    <li><a href="https://www.youtube.com/@pplgtwoofus9054" target="_blank"><img src={youtube} alt="youtube-logo" /></a></li>
                </ul>
            </div>

            <hr className="border-third" />

            <div>
                <p className="text-fourth font-din text-base">Copyright © 2022 <a className="text-third underline" href="https://github.com/hasnat5/arum">arum</a>.</p>
            </div>
        </footer >
    )
}

export default footer;