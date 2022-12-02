import React from "react";
import { Link } from "react-router-dom";
import Kobeni from './../../asset/img/kobeni.png';

const listAktor = () => {
    return (
        <section className="container bg-primary pt-12">
            <div className="relative grid gap-5 justify-items-center px-6 pt-10">
                <div>
                    <h1 className="text-third font-bold font-tungsten text-left text-6xl mb-9">AKTOR</h1>
                    <p className="text-third font-din text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum nam magnam cumque exercitationem tenetur veritatis, optio accusamus deleniti dignissimos dicta laborum consequuntur dolorem voluptatibus debitis placeat qui sequi asperiores provident itaque quasi molestiae repellendus. Cumque?</p>
                </div>

                <div className="grid justify-items-center">
                    <img src={Kobeni} className="w-10/12" alt="" />
                </div>

                <div className="absolute bottom-12">
                    <Link to="/aktor" className=" inline-block text-secondary font-dinBold text-base bg-third py-4 px-7">LIHAT SEMUA AKTOR</Link>
                </div>
            </div>

        </section>
    )
}

export default listAktor;