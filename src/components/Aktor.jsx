import { React, Fragment, useState } from "react";
import { Listbox, Transition } from '@headlessui/react'
import { ChevronUpDownIcon } from '@heroicons/react/20/solid'

import Arum from "../asset/img/anel.png"
import ayahArum from "../asset/img/naufal.png"
import ibuArum from "../asset/img/nopa.png"
import Gyndara from "../asset/img/paksi.png"
import ayahGyndara from "../asset/img/bisma.png"
import Brandon from "../asset/img/ikhsan.png"
import ayahBrandon from "../asset/img/darrel.png"
import ibuBrandon from "../asset/img/nadila.png"
import Galen from "../asset/img/hasnat.png"
import Asgar from "../asset/img/azril.png"
import Emil from "../asset/img/fadhli.png"
import Baron from "../asset/img/hatif.png"
import Ian from "../asset/img/syafaat.png"
import Ola from "../asset/img/sherryl.png"
import Qiran from "../asset/img/marwa.png"
import pakKusmo from "../asset/img/evan.png"
import mesum1 from "../asset/img/reyvan.png"
import mesum2 from "../asset/img/noval.png"
import mesum3 from "../asset/img/rakendra.png"
import caraka from "../asset/img/fikri.png"

const people = [
    { "nama": "Risma Anelita", "peran": "Arum", "img": Arum, "deskripsi":"Arum adalah anak yang berbudi pekerti luhur. Ia memiliki semangat yang tinggi dalam memperjuangkan haknya sebagai seorang perempuan. Ia tetap tumbuh walau jiwa telah rapuh"},
    { "nama": "Trah Purwa Paksi", "peran": "Gyndara", "img":Gyndara , "deskripsi":"Gyndara adalah seorang remaja yang mempunyai hobby bermain gitar ia keturunan dari anak seorang musisi, hobby nya tidak didukung karena alasan tertentu"},
    { "nama": "Muhammad Naufal Nabillansyah", "peran": "Ayah Arum", "img": ayahArum , "deskripsi":"Bapak memiliki anak gadis semata wayang, ia sangat menyayanginya dengan didikan bapak yang begitu ketat arum merasa tertekan"},
    { "nama": "Wulan Shavira Nopa", "peran": "Ibu Arum", "img":ibuArum, "deskripsi":" " },
    { "nama": "Marwa Aulia Lukman", "peran": "Qiran","img":Qiran, "deskripsi":"Qiran adalah salah satu sahabat sejati arum ia senantiasa menyemangati arum ditengah keterpurukan arum, ia berusaha menjaga arum untuk tetap tersenyum" },
    { "nama": "Sherryl Azizah Aulia", "peran": "Ola", "img":Ola, "deskripsi":"Ola adalah salah satu sahabat sejati arum, ia terkenal di sekolah karena kecantikannya, karena itupun ia menjadi pusat perhatian di kelasnya" },
    { "nama": "Bisma Gyndara Mages Jayalangit", "peran": "Ayah Gyndara","img":ayahGyndara,"deskripsi":"Seorang ayah yang tidak ingin anaknya menderita seperti apa yang ia alami" },
    { "nama": "Darrel Rafa Raihan", "peran": "Ayah Brandon", "img":ayahBrandon, "deskripsi":"Dia adalah seorang juragan sapi yang sangat kaya di kampungnya ia berwibawa tinggi untuk memperjuangkan keinginan seorang anaknya" },
    { "nama": "Nadilla Nur Afifah", "peran": "Ibu Brandon", "img": ibuBrandon, "deskripsi":"Ia sangat mendukung anaknya untuk mendapatkan apa yang anaknya inginkan" },
    { "nama": "Ikhsan Rifansyah", "peran": "Brandon", "img":Brandon, "deskripsi":"Brandon anak dari juragan sapi di kampungnya, dia seorang anak yang ketergantungan kepada orang tua nya" },
    { "nama": "Evan Fawwaz Firjatullah", "peran": "Pak Kusmo","img":pakKusmo, "deskripsi":"Pak Kusmo guru yang begitu tegas kepada murid murid nya, ia mendidik murid muridnya untuk menjadi orang orang yang sukses namun keterbatasan metode belajar membuat siswa siswinya terkekang" },
    { "nama": "Muhammad Hatif Ghazy", "peran": "Baron", "img":Baron, "deskripsi":"Baron adalah seorang siswa yang begitu sombong dengan kesombongan itu lah baron memperlakukan perempuan dengan semena-mena" },
    { "nama": "Azril Devan Saqi", "peran": "Asgar",'img':Asgar, "deskripsi":"Asgar adalah siswa yang suka mengejek teman teman nya sendiri namun di sisi lain ia juga memiliki sifat yang suka menggoda perempuan" },
    { "nama": "Hasnat Ferdiananda", "peran": "Galen", "img": Galen, "deskripsi":"Galen adalah siswa yang memiliki kepercayaan diri namun ia sering kali menggunakan kepercayaan itu untuk merendahkan siswa perempuan" },
    { "nama": "Syafa'at Abdusalam", "peran": "Ian","img":Ian, "deskripsi":"Ian adalah seorang siswa pemalas dan cara berpikir yang lemot, ia juga suka menjadi bahan candaan teman temannya" },
    { "nama": "Muhammad Fadhli Fathoni", "peran": "Emil", "img":Emil, "deskripsi":"Seorang siswa yang melakukan tindakan patriarki, ia begitu mendukung temannya untuk menjadi laki laki yang memiliki kekuasaan" },
    { "nama": "Rievan Rivaldy Nur Triana", "peran": "Murid Mesum 1", "img":mesum1 , "deskripsi":"Ia bertingkah laku aneh karena pikirannya yang kotor"},
    { "nama": "Noval Raihan Al-Fikriana", "peran": "Murid Mesum 2", "img":mesum2 , "deskripsi":"Murid ini adalah salah satu murid yang memiliki lingkungan pertemanan yang kurang baik, dan menyebabkan tingkah laku murid ini berpikiran negatif"},
    { "nama": "Rakendra Aznil Raekhan", "peran": "Murid Mesum 3","img":mesum3, "deskripsi":"Murid ini dapat mengajak temannya untuk tidak terjerumus kedalam hal yang negatif"},
    { "nama": "Fikri Alfathir Solehudin", "peran": "Caraka" ,"img":caraka, "deskripsi":"Seorang petugas yang sangat kepo terhadap berita berita menarik"},
]

const ListAktor = () => {

    const [selected, setSelected] = useState(people[0])
    return (
        <section className="container pt-16" >
            <div className="grid justify-center pt-6 bg-secondary/95">
                <h1 className="absolute left-0 right-0 mx-auto font-tungsten text-6xl text-third text-center">{selected.nama}</h1>
                <img src={selected.img} className="h-[70vh] z-10 relative" alt="poto_aktor" />
            </div>


            <div className="bg-third">
                <div className="grid gap-9 px-6 py-10">
                    <article>
                        <span className="font-dinBold text-xl text-fourth">PERAN</span>
                        <h1 className="font-tungsten text-5xl text-secondary">{selected.peran}</h1>
                    </article>

                    <article>
                        <h2 className="font-dinBold text-xl text-fourth mb-4">DESKRIPSI</h2>
                        <p className="font-din text-fourth text-lg">{selected.deskripsi}</p>

                        <div className="grid justify-items-center">
                            <div className="min-w-full">
                                <Listbox value={selected} onChange={setSelected}>
                                    <div className="relative mt-1">
                                        <Listbox.Button className="relative w-full cursor-default border border-fourth bg-third py-2 pl-3 pr-10 text-center font-dinBold text-secondary uppercase focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                                            <span className="block truncate">{selected.peran}</span>
                                            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                                <ChevronUpDownIcon
                                                    className="h-5 w-5 text-gray-400"
                                                    aria-hidden="true"
                                                />
                                            </span>
                                        </Listbox.Button>
                                        <Transition
                                            as={Fragment}
                                            leave="transition ease-in duration-100"
                                            leaveFrom="opacity-100"
                                            leaveTo="opacity-0"
                                        >
                                            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-third py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                                {people.map((person, personIdx) => (
                                                    <Listbox.Option
                                                        key={personIdx}
                                                        className={({ active }) =>
                                                            `relative cursor-default select-none py-2 px-6 ${active ? 'bg-secondary text-third uppercase' : 'text-fourth font-din uppercase'
                                                            }`
                                                        }
                                                        value={person}
                                                    >
                                                        {({ selected }) => (
                                                            <>
                                                                <span
                                                                    className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                                                                        }`}
                                                                >
                                                                    {person.peran}
                                                                </span>
                                                            </>

                                                        )}
                                                    </Listbox.Option>
                                                ))}
                                            </Listbox.Options>
                                        </Transition>
                                    </div>
                                </Listbox>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    )
}

export default ListAktor; 