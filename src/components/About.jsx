import React from "react";
import tentang from "../asset/img/jumbotron.jpg";

const about = () => {
    return (
        <section className="bg-third">
            <div className="px-6 py-12">
                <h1 className="text-secondary font-bold font-tungsten text-6xl mb-9">ABOUT US</h1>
                <p className="font-din text-lg text-fourth">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero officiis consectetur nemo nihil accusamus natus et quo autem at suscipit tenetur atque amet laudantium totam tempore, eveniet placeat id mollitia optio itaque? Sapiente fugiat vero quisquam nihil? Consequatur, reiciendis necessitatibus!</p>
                <img src={tentang} alt="" />
            </div>
        </section>
    )
}

export default about;