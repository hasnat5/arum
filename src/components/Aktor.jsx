import { React, Fragment, useState } from "react";
import { Listbox, Transition } from '@headlessui/react'
import { ChevronUpDownIcon } from '@heroicons/react/20/solid'

import Arum from "../asset/img/anel.png"
import Galen from "../asset/img/hasnat.png"


const people = [
    { "nama": "Risma Anelita", "peran": "Arum", "img": Arum },
    { "nama": "Trah Purwa Paksi", "peran": "Gyndara" },
    { "nama": "Muhammad Naufal Nabillansyah", "peran": "Ayah Arum" },
    { "nama": "Wulan Shavira Nopa", "peran": "Ibu Arum" },
    { "nama": "Marwa Aulia Lukman", "peran": "Qiran" },
    { "nama": "Sherryl Azizah Aulia", "peran": "Ola" },
    { "nama": "Bisma Gyndara Mages Jayalangit", "peran": "Ayah Gyndara" },
    { "nama": "Darrel Rafa Raihan", "peran": "Ayah Brandon" },
    { "nama": "Nadilla Nur Afifah", "peran": "Ibu Brandon" },
    { "nama": "Ikhsan Rifansyah", "peran": "Brandon" },
    { "nama": "Evan Fawwaz Firjatullah", "peran": "Pak Kusmo" },
    { "nama": "Muhammad Hatif Ghazy", "peran": "Baron" },
    { "nama": "Azril Devan Saqi", "peran": "Asgar" },
    { "nama": "Hasnat Ferdiananda", "peran": "Galen", "img": Galen },
    { "nama": "Syafa'at Abdusalam", "peran": "Ian" },
    { "nama": "Muhammad Fadhli Fathoni", "peran": "Emil" },
    { "nama": "Rievan Rivaldy Nur Triana", "peran": "Murid Mesum 1" },
    { "nama": "Noval Raihan Al-Fikriana", "peran": "Murid Mesum 2" },
    { "nama": "Rakendra Aznil Raekhan", "peran": "Murid Mesum 3" },
    { "nama": "Fikri Alfathir Solehudin", "peran": "Caraka" },
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
                        <p className="font-din text-fourth text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, rem eum mollitia ratione temporibus cum est quos esse vel tempore sint, aut voluptas quo ullam repellat velit, possimus at neque.</p>

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