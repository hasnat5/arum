import React from "react";
import Arum from "../../asset/img/jumbotron.jpg"

const jumbotron = () => {
    return (
        <main className="container grid h-screen min-w-full items-center bg-no-repeat bg-center bg-cover lg:grid-cols-2" style={{ backgroundImage: `url(${Arum})` }}>
            <div className="px-6 md:px-16 text-center md:text-left">
                <h1 className="text-primary font-bold font-tungsten text-8xl tracking-wider md:text-9xl">ARUM</h1>
                <p className="text-lg text-third font-din md:text-xl">Sebuah drama yang menceritakan feminisme,
                    patriarki, dan toxic masculinity
                    yang kerap terjadi di indonesia
                </p>
            </div>

        </main >
    )
}

export default jumbotron;