'use client'

import React from "react"
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";

const Home = () => {
    return (
        <div className="min-h-screen" id="\Home">
            <div className="bg-lime-500 top-0 w-full h-20"></div>
            <Navbar/>
            <div className="grid grid-cols-3 grid-rows-2 w-screen">
                <img className="col-span-2 row-span-2 brightness-70 h-full" src="/assets/1.jpg" alt="image1" />
                    <span className="absolute top-1/2 left-1/4 -translate-x-1/2 translate-y-1/2 font-bold text-white text-[44px]">
                        Inspiring You<p>a Nutritious Life</p>
                    </span>
                <img className="w-full" src="/assets/cv.png" alt="cv"/>
                <img className="w-full" src="/assets/join.png" alt="join"/>                  
            </div>
            <Footer />
            
        </div>
    
    );
}

export default Home;