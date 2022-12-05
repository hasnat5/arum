import React from "react";
import MainImage from "../../asset/img/arum.jpg";

const jumbotron = () => {
    return (
        <main className="grid h-screen items-center bg-no-repeat bg-center bg-cover" style={{ backgroundImage: `url(${MainImage})` }}>
            <div className="px-6">
                <h1 className="text-primary font-bold font-tungsten text-8xl text-center tracking-wider">ARUM</h1>
                <p className="text-lg text-third text-center font-din">Sebuah drama yang menceritakan feminisme,
                    patriarki, dan toxic masculinity
                    yang kerap terjadi di indonesia</p>
            </div>

        </main >
    )
}

export default jumbotron;