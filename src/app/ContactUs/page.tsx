'use client'

import React from "react"
import Navbar from "@/Components/Navbar"
import Footer from "@/Components/Footer";

const Contact = () => {
    return (
            <div className="w-screen" id="\ContactUs">
                <div className="bg-[#69b23b] top-0 h-20">
                </div>
                <Navbar />
                <div className="flex relative">
                    <img className="h-[800px] "src=".\assets\contact.jpg" alt="contact" />
                <div className=" bg-[#69b23b] w-1/2 opacity-80 absolute h-full flex flex-col right-0 text-white text-lg">
                    <div className="ml-9">
                        <p className="mt-8 font-semibold">Office</p>
                        <p className="mt-2 flex flex-wrap w-[180px] text-[13px]">Kawasan Industri Pulogadung Jl. Rawabali II No.3 Jakarta 13920, Indonesia</p>
                        <p className="mt-8 font-semibold">Factory</p>
                        <p className="mt-2 flex flex-wrap w-[180px] text-[13px]">Jl. Raya Ciawi 280A
                        Bogor 16146, Indonesia</p>
                        <p className=" mt-8 flex flex-wrap w-[180px] text-[13px]">Kawasan Industri MM2100 Cibitung Jl. Selayar Blok H7-H8 Cikarang Barat 17530, Indonesia</p>
                        <span className="mt-8 flex flex-wra w-[250px] text-[13px]">Jl. Alternatif Sentul Sirkuit No. 09 
                            <ul>Babakan Cikeas RT 06/03, Desa Sentul, Kec. Babakan Madang Kab Bogor 16810, Indonesia 
                            </ul>
                        </span>
                        <div className="flex flex-col">
                            
                            <span className="mt-8 font-semibold flex flex-col">For Distributor</span>
                             <span className="text-[13px] mt-2 flex flex-wrap">Indonesia</span>
                                <ul className="text-[13px]">Telp.: +62 21 29635700 (Operator)</ul>
                                <ul className="text-[13px]">Telp.: +62 21 460 7777 (customer relation)</ul>
                                <ul className="text-[13px]">Email: customer@nutrifood.co.id</ul>       
                            <span className="text-[13px] mt-6">Press</span>
                                <ul className="text-[13px]">Telp.: +62 21 29635700</ul>
                                <ul className="text-[13px]">Fax: +62 21 4682 9506</ul>
                        </div>
                    </div>                       
                </div>
            </div>
            <Footer/>
        </div>     
             
    );
}

export default Contact;