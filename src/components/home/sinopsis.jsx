import React from "react";
import documentation from "../../asset/img/jumbotron.jpg";

const sinopsis = () => {
    return (
        <section className="container m-auto min-w-full bg-third pt-12 px-6 py-10 md:px-16">
            <h1 className="text-secondary font-bold font-tungsten text-6xl mb-9 lg:mb-14 tracking-wider md:text-9xl md:tracking-normal">SINOPSIS</h1>
            <div className="lg:grid lg:grid-cols-2 lg:items-center gap-6">
                <div>
                    <p className="text-fourth font-din text-lg lg:pl-32">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum nam magnam cumque exercitationem tenetur veritatis, optio accusamus deleniti dignissimos dicta laborum consequuntur dolorem voluptatibus debitis placeat qui sequi asperiores provident itaque quasi molestiae repellendus. Cumque?</p>
                </div>

                <div className="relative">
                    <div className="absolute -left-6 lg:left-7 top-5 bg-primary px-7 py-1">
                        <p className="text-white font-dinBold text-base">DOKUMENTASI</p>
                    </div>
                    <img src={documentation} className="mt-16 mb-8 md:mt-0 md:mb-0 lg:pl-12" alt="" />
                </div>
            </div>
        </section>
    )
}

export default sinopsis;