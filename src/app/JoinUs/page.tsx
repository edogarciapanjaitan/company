'use client'

import React from "react"

import Navbar from "@/Components/Navbar"
import Footer from "@/Components/Footer"

const Join = () => {
    return (
        <div className="w-screen" id="\JoinUs">
                <div className="bg-[#3c3c3f] top-0 h-20">
                </div>
                <Navbar />
            <div className="p-12 ml-[170px] mr-[170px]">
                <span>
                    Join Us  Submit CV
                </span>
                <h1 className="mt-[20px] text-6xl font-light">Curricullum Vitae</h1>
                <p className="mt-[20px] mb-[20px]">DISCLAIMER</p>
                <span className="italic">Nutrifood tidak akan pernah memungut biaya apapun dalam rangkaian proses recruitment. Kepada para calon pelamar diharapkan lebih seksama dan cermat, jika terdapat keraguan atau pertanyaan mengenai info lowongan pekerjaan atau pemanggilan proses rekrutmen, dapat menghubungi kami melalui email recruitment@nutrifood.co.id.</span>
                <p className="mt-[20px]">We encourage you to submit an application by filling out the application form on this page, as your data will be stored in our database we will look up to, once we have open vacancies.
                </p>
                <p className="mt-[20px]">As for current vacancies, kindly check Vacancy</p>
                <p className="mt-[20px]">For more info please click FAQ</p>
                <p className="mt-[20px]">"Please read carefully for each question before filling the form"</p>
                
                <div className="text-red-500 mb-[30px]">
                    <ul>Jika terjadi error, dapat memperhatikan beberapa hal dibawah ini</ul>
                        <li>Lakukan pengisian dengan laptop.</li>
                        <li> Hindari tanda baca seperti petik (') atau petik dua ("), minimal gunakan tanda baca koma (,) dan titik (.).</li>
                        <li> Hindari penggunaan autocorrect pada browser.</li>
                </div>
                
                <span className="text-green-600 text-4xl">Personal Detail</span>
                
                <div className="flex flex-wrap gap-2 mt-[30px]">
                        <label className="font-semibold">Name</label>
                        <input type="text" name="nama" placeholder="Input Name..." className="justify-between w-full border border-zinc-500 py-2 px-2 rounded-md" required/>
                </div>
                <div className="flex flex-wrap gap-2 mt-[30px]">
                        <label className="font-semibold">NIK</label>
                        <input type="num" name="nama" placeholder="Input NIK..." className="justify-between w-full border border-zinc-500 py-2 px-2 rounded-md" required/>
                </div>
                <div className="flex flex-wrap gap-2 mt-[30px]">
                        <label className="font-semibold">Status</label>
                        <input type="text" name="nama"  className="justify-between w-full border border-zinc-500 py-2 px-2 rounded-md" required/>
                </div>
                <div className="flex flex-wrap gap-2 mt-[30px]">
                        <label className="font-semibold">Email</label>
                        <input type="text" name="nama" placeholder="Input Email..." className="justify-between w-full border border-zinc-500 py-2 px-2 rounded-md" required/>
                </div>
            </div>
            <div className="border border-black w-[250px] h-[40px] rounded-full flex items-center justify-center-safe bg-green-500 text-white mx-auto hover:cursor-pointer">
                SUBMIT
            </div>
            <Footer />
        </div>

    );
}

export default Join;