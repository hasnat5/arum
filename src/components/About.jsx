import React from "react";
import AboutUs from "./about/aboutUs";
import Crew from "./about/crew";

const about = () => {
    let studentlist = [
        { "nama": "Alfiah Maulani", "job": "Wardrobe", "Instagram": "https://www.instagram.com/alfiahmaulani/" },
        { "nama": "Alifah Zachra Syifatunnajwa", "job": "Narator", "Instagram": "https://www.instagram.com/alfhz_/" },
        { "nama": "Anugerah Muhammad Araffah", "job": "Sound Engineer", "Instagram": "https://www.instagram.com/anuga_arsha/" },
        { "nama": "Azril Devan Saqi", "job": "Actor", "Instagram": "https://www.instagram.com/rillouse_/" },
        { "nama": "Bisma Gyndara Mages Jayalangit", "job": ["Asisten Sutradara", "Actor"], "Instagram": "https://www.instagram.com/gyndara/" },
        { "nama": "Darrel Rafa Raihan", "job": "Actor", "Instagram": "https://www.instagram.com/darrell.rr/" },
        { "nama": "Evan Fawwaz Firjatullah", "job": "Actor", "Instagram": "https://www.instagram.com/vanzyx__/" },
        { "nama": "Fikri Alfathir Solehudin", "job": ["Actor", "Digital Artist"], "Instagram": "https://www.instagram.com/fikrykcl_/" },
        { "nama": "Hasnat Ferdiananda", "job": ["Actor", "Digital Artist"], "Instagram": "https://www.instagram.com/hasnat5_/" },
        { "nama": "Ikhsan Rifansyah", "job": "Actor", "Instagram": "https://www.instagram.com/ikhsanriff/" },
        { "nama": "Kuat Paryanto", "job": "Property", "Instagram": "https://www.instagram.com/xyz.kkktdya19/" },
        { "nama": "Marwa Aulia Lukman", "job": "Actor", "Instagram": "https://www.instagram.com/marwaaaulia/" },
        { "nama": "Muhammad Fadhli Fathoni", "job": ["Actor", "Digital Artist"], "Instagram": "https://www.instagram.com/mfadhlifathoni/" },
        { "nama": "Muhammad Naufal Nabillansyah", "job": "Actor", "Instagram": "https://www.instagram.com/naufalll.docx/" },
        { "nama": "Muhammad Hatif Ghazy", "job": "Actor", "Instagram": "https://www.instagram.com/hazzyy.g/" },
        { "nama": "Muhammad Rafly Pratama", "job": "Sound Engineer", "Instagram": "https://www.instagram.com/rafutaa_/" },
        { "nama": "Muhammad Zaki Athallah Putra Pratama", "job": "Sound Engineer", "Instagram": "https://www.instagram.com/muhammad.zaki.a.p.p/" },
        { "nama": "Nadilla Nur Afifah", "job": "Actor", "Instagram": "https://www.instagram.com/_ndlaan/" },
        { "nama": "Noval Raihan Al-Fikriana", "job": "Actor", "Instagram": "https://www.instagram.com/ngopal.99/" },
        { "nama": "Pamella Zahara Maulidya Ardianto", "job": "Sutradara", "Instagram": "https://www.instagram.com/pamella446" },
        { "nama": "Rahmat Hidayat", "job": "Wardrobe", "Instagram": "https://www.instagram.com/matttt365/" },
        { "nama": "Raka Putra Ramadhan", "job": ["Actor", "Property"], "Instagram": "https://www.instagram.com/raakaaaa.js/" },
        { "nama": "Rakendra Aznil Raekhan", "job": ["Actor", "Wardrobe"], "Instagram": "https://www.instagram.com/rakenndraa/" },
        { "nama": "Rezky Rizqullah", "job": "Property", "Instagram": "https://www.instagram.com/ekyyy.sql/" },
        { "nama": "Rievan Rivaldy Nur Triana", "job": ["Actor", "Digital Artist"], "Instagram": "https://www.instagram.com/reyvan_sr_my/" },
        { "nama": "Riordan Muhammad Al Kautsar", "job": "Dokumenter", "Instagram": "https://www.instagram.com/io_459/" },
        { "nama": "Risma Anelita", "job": "Actor", "Instagram": "https://www.instagram.com/akualien09/" },
        { "nama": "Rizky Firmansyah Putra", "job": "Property", "Instagram": "https://www.instagram.com/rizkyputtraaa/" },
        { "nama": "Rizwan Nurshiddiq", "job": "Property", "Instagram": "https://www.instagram.com/rizwa.ns_/" },
        { "nama": "Sandi Sulaiman Pratama", "job": "Property", "Instagram": "https://www.instagram.com/sandisnprtma/" },
        { "nama": "Sherryl Azizah Aulia", "job": "Actor", "Instagram": "https://www.instagram.com/sherylazizah/" },
        { "nama": "Syafa'at Abdusalam", "job": "Actor", "Instagram": "https://www.instagram.com/syafaat.a.s/" },
        { "nama": "Trah Purwa Paksi", "job": "Actor", "Instagram": "https://www.instagram.com/sipaksiii/" },
        { "nama": "Wulan Shavira Nopa", "job": "Actor", "Instagram": "https://www.instagram.com/shaviranopa_/" },
        { "nama": "Zahra Lathifah Khairani Wardhana", "job": ["Wardrobe", "Solo"], "Instagram": "https://www.instagram.com/zhr_junjunie23/" },
    ]
    //Zahra nyanyi di akhir

    return (
        <section className="bg-third pt-16">
            <div className="grid gap-9 px-6 py-10">
                <h1 className="font-tungsten text-6xl">KRU</h1>
                <div className="text-center grid gap-6">
                    <div>
                        <h2 className="jobTitle">SUTRADARA</h2>
                        {(() => {
                            let post = [];
                            for (let i = 0; i < studentlist.length; i++) {
                                if (studentlist[i].job.includes("Sutradara")) {
                                    post.push(<Crew instagram={studentlist[i].Instagram} nama={studentlist[i].nama}></Crew>)
                                }
                            }
                            return post;
                        })()}
                    </div>
                    <div>
                        <h2 className="jobTitle">ASISTEN SUTRADARA</h2>
                        {(() => {
                            let post = [];
                            for (let i = 0; i < studentlist.length; i++) {
                                if (studentlist[i].job.includes("Asisten Sutradara")) {
                                    post.push(<Crew instagram={studentlist[i].Instagram} nama={studentlist[i].nama}></Crew>)
                                }
                            }
                            return post;
                        })()}
                    </div>
                    <div>
                        <h2 className="jobTitle">NARATOR</h2>
                        {(() => {
                            let post = [];
                            for (let i = 0; i < studentlist.length; i++) {
                                if (studentlist[i].job.includes("Narator")) {
                                    post.push(<Crew instagram={studentlist[i].Instagram} nama={studentlist[i].nama}></Crew>)
                                }
                            }
                            return post;
                        })()}
                    </div>
                    <div>
                        <h2 className="jobTitle">AKTOR</h2>
                        {(() => {
                            let post = [];
                            for (let i = 0; i < studentlist.length; i++) {
                                if (studentlist[i].job.includes("Actor")) {
                                    post.push(<Crew instagram={studentlist[i].Instagram} nama={studentlist[i].nama}></Crew>)
                                }
                            }
                            return post;
                        })()}

                    </div>


                    <div>
                        <h2 className="jobTitle">PROPERTI</h2>
                        {(() => {
                            let post = [];
                            for (let i = 0; i < studentlist.length; i++) {
                                if (studentlist[i].job.includes("Property")) {
                                    post.push(<Crew instagram={studentlist[i].Instagram} nama={studentlist[i].nama}></Crew>)
                                }
                            }
                            return post;
                        })()}
                    </div>
                    <div>
                        <h2 className="jobTitle">WARDROBE</h2>
                        {(() => {
                            let post = [];
                            for (let i = 0; i < studentlist.length; i++) {
                                if (studentlist[i].job.includes("Wardrobe")) {
                                    post.push(<Crew instagram={studentlist[i].Instagram} nama={studentlist[i].nama}></Crew>)
                                }
                            }
                            return post;
                        })()}
                    </div>

                    <div>
                        <h2 className="jobTitle">SPESIALIS DIGITAL</h2>
                        {(() => {
                            let post = [];
                            for (let i = 0; i < studentlist.length; i++) {
                                if (studentlist[i].job.includes("Digital Artist")) {
                                    post.push(<Crew instagram={studentlist[i].Instagram} nama={studentlist[i].nama}></Crew>)
                                }
                            }
                            return post;
                        })()}
                    </div>
                    <div>
                        <h2 className="jobTitle">TEKNISI SUARA</h2>
                        {(() => {
                            let post = [];
                            for (let i = 0; i < studentlist.length; i++) {
                                if (studentlist[i].job.includes("Sound Engineer")) {
                                    post.push(<Crew instagram={studentlist[i].Instagram} nama={studentlist[i].nama}></Crew>)
                                }
                            }
                            return post;
                        })()}
                    </div>

                    <div>
                        <h2 className="jobTitle">DOKUMENTER</h2>
                        {(() => {
                            let post = [];
                            for (let i = 0; i < studentlist.length; i++) {
                                if (studentlist[i].job.includes("Dokumenter")) {
                                    post.push(<Crew instagram={studentlist[i].Instagram} nama={studentlist[i].nama}></Crew>)
                                }
                            }
                            return post;
                        })()}
                    </div>


                </div>

            </div>

            <AboutUs />
        </section>

    )
}

export default about;