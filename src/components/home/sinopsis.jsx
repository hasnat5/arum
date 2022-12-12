import React from "react";

const sinopsis = () => {
    return (
        <section className="container m-auto min-w-full bg-third pt-12 px-6 py-10 md:px-16">
            <h1 className="text-secondary font-bold font-tungsten text-6xl mb-9 lg:mb-14 tracking-wider md:text-9xl md:tracking-normal">SINOPSIS</h1>
            <div className="lg:grid lg:grid-cols-2 lg:items-center gap-6">
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
        </section>
    )
}

export default sinopsis;