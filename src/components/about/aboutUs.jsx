import React from "react";
import hasnatDev from "../../asset/img/fadhli_pengembang.jpg";
import fadhliDev from "../../asset/img/fadhli_pengembang.jpg";

const aboutUs = () => {
    return (
        <div className="grid gap-12 px-6 py-10 lg:px-16">
            <h1 className="text-secondary font-tungsten text-6xl lg:text-8xl">TENTANG PENGEMBANG</h1>

            {/* hasnat profile */}
            <div>
                <h2 className="font-dinBold text-3xl lg:text-4xl text-secondary underline text-center mb-6 lg:mb-9">Hasnat Ferdiananda</h2>

                <div className="grid items-center justify-items-center lg:px-24 lg:grid-cols-12">
                    <img src={hasnatDev} className="w-6/12 lg:w-full lg:order-2 mb-6 lg:mb-9 lg:col-span-2 lg:justify-self-end" alt="poto_developer" />
                    <p className="font-din text-lg text-fourth lg:col-span-10 lg:pr-9">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero officiis consectetur nemo nihil accusamus natus et quo autem at suscipit tenetur atque amet laudantium totam tempore, eveniet placeat id mollitia optio itaque? Sapiente fugiat vero quisquam nihil? Consequatur, reiciendis necessitatibus!</p>
                </div>
            </div>

            {/* fadhli profile */}
            <div>
                <h2 className="font-dinBold text-3xl lg:text-4xl text-secondary underline text-center mb-6 lg:mb-9">Muhammad Fadhli Fathoni</h2>

                <div className="grid items-center justify-items-center lg:px-24 lg:grid-cols-12">
                    <img src={fadhliDev} className="w-6/12 lg:w-full mb-6 lg:mb-9 lg:col-span-2" alt="poto_developer" />
                    <p className="font-din text-lg text-fourth lg:col-span-10 lg:pl-9">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero officiis consectetur nemo nihil accusamus natus et quo autem at suscipit tenetur atque amet laudantium totam tempore, eveniet placeat id mollitia optio itaque? Sapiente fugiat vero quisquam nihil? Consequatur, reiciendis necessitatibus!</p>
                </div>
            </div>
        </div >
    )
}

export default aboutUs;
