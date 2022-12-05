import React from "react";
import documentation from "../../asset/img/jumbotron.jpg";

const sinopsis = () => {
    return (
        <section className="container bg-third pt-12">
            <div className="px-6 py-10">
                <h1 className="text-secondary font-bold font-tungsten text-6xl mb-9 tracking-wide">SINOPSIS</h1>
                <p className="text-fourth font-din text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum nam magnam cumque exercitationem tenetur veritatis, optio accusamus deleniti dignissimos dicta laborum consequuntur dolorem voluptatibus debitis placeat qui sequi asperiores provident itaque quasi molestiae repellendus. Cumque?</p>

                <div className="relative">
                    <div className="absolute grid -left-6 top-5 bg-primary px-7 py-1">
                        <p className="text-white font-dinBold text-base">DOKUMENTASI</p>
                    </div>
                    <img src={documentation} className="mt-16 mb-8" alt="" />
                </div>
            </div>
        </section>
    )
}

export default sinopsis;