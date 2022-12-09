import React from "react";
import tentang from "../../asset/img/jumbotron.jpg";
const aboutUs = () => {
    return (
        <div className="grid px-6 py-10 gap-9 lg:px-16">
            <h1 className="text-secondary font-tungsten text-6xl lg:text-8xl">TENTANG PENGEMBANG</h1>
            <p className="font-din text-lg text-fourth">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero officiis consectetur nemo nihil accusamus natus et quo autem at suscipit tenetur atque amet laudantium totam tempore, eveniet placeat id mollitia optio itaque? Sapiente fugiat vero quisquam nihil? Consequatur, reiciendis necessitatibus!</p>
            <img src={tentang} alt="poto_kelas" />
        </div >
    )
}

export default aboutUs;
