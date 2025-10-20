'use client'

import React from "react"
import Navbar from "@/Components/Navbar"
import Footer from "@/Components/Footer"

const Events = () => {
    return (
        <div className="min-h-screen" id="/Events">
            <div className="bg-[#E94c60] top-0 h-20"></div>
            <Navbar />
            <div className="flex relative">
                    <img className="h-[700px]"src=".\assets\event1.jpg" alt="event" />
                    <div className=" bg-[#e94c60] w-1/2 opacity-100 absolute h-full flex flex-col right-0 text-white text-lg">
                        <div className="p-23">
                            <h1 className="text-6xl mb-5">Nutrifood Leadership Award</h1>
                            <span className="text-[16px] mt-4">An initiative to appreciate college students who have exhibited significant roles of leaders and influencers.</span>
                        </div>
                    </div>
                </div>
            <div className="flex relative">
                    <img className="h-[700px] w-screen"src=".\assets\event2.jpg" alt="event" />
                    <div className=" bg-[#e94c60] w-1/2 opacity-90 absolute h-full flex flex-col left-0 text-white text-lg">
                        <div className="p-23">
                            <h1 className="text-6xl mb-5">Nutrifood Research Center Fellowship</h1>
                            <span className="text-[16px] mt-4">Membangun Indonesia yang lebih sehat melalui inovasi produk pangan yang dapat membatasi konsumsi gula, garam, dan lemak.</span>
                        </div>
                    </div>
                </div>
            <Footer />
        </div>
    );
}

export default Events;