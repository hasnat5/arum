import React from "react";
import { Link } from "react-router-dom";
import Aktor from './../../asset/img/1.png';

const listAktor = () => {
    return (
        <section className="container min-w-full bg-primary pt-12">
            <div className="relative grid justify-items-center px-6 pt-10 lg:grid-cols-2 lg:px-16">
                <div className="grid lg:order-2 gap-9 lg:pb-16">
                    <h1 className="text-third font-bold font-tungsten text-left text-6xl tracking-wider md:text-9xl lg:tracking-normal">AKTOR</h1>
                    <p className="text-third font-din text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum nam magnam cumque exercitationem tenetur veritatis, optio accusamus deleniti dignissimos dicta laborum consequuntur dolorem voluptatibus debitis placeat qui sequi asperiores provident itaque quasi molestiae repellendus. Cumque?</p>
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

        </section>
    )
}

export default listAktor;