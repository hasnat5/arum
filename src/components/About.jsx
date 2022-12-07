import React from "react";
import AboutUs from "./about/aboutUs";
import Crew from "./about/crew";

const about = () => {
    let studentlist = [
        { "absen": 1, "nama": "Alfiah Maulani", "job": "Wardrobe", "Instagram": "https://www.instagram.com/alfiahmaulani/" },
        { "absen": 2, "nama": "Alifah Zachra Syifatunnajwa", "job": "Narator", "Instagram": "https://www.instagram.com/alfhz_/" },
        { "absen": 3, "nama": "Anugerah Muhammad Araffah", "job": "Sound Engineer", "Instagram": "https://www.instagram.com/anuga_arsha/" },
        { "absen": 4, "nama": "Azril Devan Saqi", "job": "Actor", "Instagram": "https://www.instagram.com/rillouse_/" },
        { "absen": 5, "nama": "Bisma Gyndara Mages Jayalangit", "job": "Asisten Sutradara", "Instagram": "https://www.instagram.com/gyndara/" },
        { "absen": 6, "nama": "Darrel Rafa Raihan", "job": "Actor", "Instagram": "https://www.instagram.com/darrell.rr/" },
        { "absen": 7, "nama": "Evan Fawwaz Firjatullah", "job": "Actor", "Instagram": "https://www.instagram.com/vanzyx__/" },
        { "absen": 8, "nama": "Fikri Alfathir Solehudin", "job": ["Actor", "Digital Artist"], "Instagram": "https://www.instagram.com/fikrykcl_/" },
        { "absen": 9, "nama": "Hasnat Ferdiananda", "job": ["Actor", "Digital Artist"], "Instagram": "https://www.instagram.com/hasnat5_/" },
        { "absen": 10, "nama": "Ikhsan Rifansyah", "job": "Actor", "Instagram": "https://www.instagram.com/ikhsanriff/" },
        { "absen": 11, "nama": "Kuat Paryanto", "job": "Property", "Instagram": "https://www.instagram.com/xyz.kkktdya19/" },
        { "absen": 12, "nama": "Marwa Aulia Lukman", "job": "Actor", "Instagram": "https://www.instagram.com/marwaaaulia/" },
        { "absen": 13, "nama": "Muhammad Fadhli Fathoni", "job": ["Actor", "Digital Artist"], "Instagram": "https://www.instagram.com/mfadhlifathoni/" },
        { "absen": 14, "nama": "Muhammad Naufal Nabillansyah", "job": "Actor", "Instagram": "https://www.instagram.com/naufalll.docx/" },
        { "absen": 15, "nama": "Muhammad Hatif Ghazy", "job": "Actor", "Instagram": "https://www.instagram.com/hazzyy.g/" },
        { "absen": 16, "nama": "Muhammad Rafly Pratama", "job": "Sound Engineer", "Instagram": "https://www.instagram.com/rafutaa_/" },
        { "absen": 17, "nama": "Muhammad Zaki Athallah Putra Pratama", "job": "Sound Engineer", "Instagram": "https://www.instagram.com/muhammad.zaki.a.p.p/" },
        { "absen": 18, "nama": "Nadilla Nur Afifah", "job": "Actor", "Instagram": "https://www.instagram.com/_ndlaan/" },
        { "absen": 19, "nama": "Noval Raihan Al-Fikriana", "job": "Actor", "Instagram": "https://www.instagram.com/ngopal.99/" },
        { "absen": 20, "nama": "Pamella Zahara Maulidya Ardianto", "job": "Sutradara", "Instagram": "https://www.instagram.com/pamella446" },
        { "absen": 21, "nama": "Rahmat Hidayat", "job": "Wardrobe", "Instagram": "https://www.instagram.com/matttt365/" },
        { "absen": 22, "nama": "Raka Putra Ramadhan", "job": ["Actor", "Property"], "Instagram": "https://www.instagram.com/raakaaaa.js/" },
        { "absen": 23, "nama": "Rakendra Aznil Raekhan", "job": ["Actor", "Wardrobe"], "Instagram": "https://www.instagram.com/rakenndraa/" },
        { "absen": 24, "nama": "Rezky Rizqullah", "job": "Property", "Instagram": "https://www.instagram.com/ekyyy.sql/" },
        { "absen": 25, "nama": "Rievan Rivaldy Nur Triana", "job": ["Actor", "Digital Artist"], "Instagram": "https://www.instagram.com/reyvan_sr_my/" },
        { "absen": 26, "nama": "Riordan Muhammad Al Kautsar", "job": "Dokumenter", "Instagram": "https://www.instagram.com/io_459/" },
        { "absen": 27, "nama": "Risma Anelita", "job": "Actor", "Instagram": "https://www.instagram.com/akualien09/" },
        { "absen": 28, "nama": "Rizky Firmansyah Putra", "job": "Property", "Instagram": "https://www.instagram.com/rizkyputtraaa/" },
        { "absen": 29, "nama": "Rizwan Nurshiddiq", "job": "Property", "Instagram": "https://www.instagram.com/rizwa.ns_/" },
        { "absen": 30, "nama": "Sandi Sulaiman Pratama", "job": "Property", "Instagram": "https://www.instagram.com/sandisnprtma/" },
        { "absen": 31, "nama": "Sherryl Azizah Aulia", "job": "Actor", "Instagram": "https://www.instagram.com/sherylazizah/" },
        { "absen": 32, "nama": "Syafa'at Abdusalam", "job": "Actor", "Instagram": "https://www.instagram.com/syafaat.a.s/" },
        { "absen": 33, "nama": "Trah Purwa Paksi", "job": "Actor", "Instagram": "https://www.instagram.com/sipaksiii/" },
        { "absen": 34, "nama": "Wulan Shavira Nopa", "job": "Actor", "Instagram": "https://www.instagram.com/shaviranopa_/" },
        { "absen": 35, "nama": "Zahra Lathifah Khairani Wardhana", "job": ["Actor", "Wardrobe"], "Instagram": "https://www.instagram.com/zhr_junjunie23/" },
    ]

    return (
        <section className="bg-third pt-16">
            <AboutUs />

            <div className="grid gap-6 px-6 py-10">
                <h1 className="font-tungsten text-6xl">CREW</h1>
                <div className="text-center grid gap-6">
                    <div>
                        <h2 className="jobTitle">SUTRADARA</h2>
                        {(() => {
                            let post = [];
                            for (let i = 0; i < studentlist.length; i++) {
                                if (studentlist[i].job === "Sutradara") {
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
                                if (studentlist[i].job === "Asisten Sutradara") {
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
                                if (studentlist[i].job === "Narator") {
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
        </section>

    )
}

export default about;