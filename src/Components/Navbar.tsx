'use client'

import React from "react"

const Navbar = () => {
    return (
    
        <div className="w-screen right-0 left-0 flex flex-wrap items-center text-slate-600          font-semibold">
                <nav className="flex flex-wrap">
                    <img src=".\assets\logo-nutrifood.png" alt="logo image"></img>
                </nav>

                <div className="flex flex-wrap justify-between gap-10">
                    <p className="hover:text-slate-400 hover:cursor-pointer">
                        <a href="/Home">Home</a>
                    </p>
                    <p className="hover:text-slate-400 hover:cursor-pointer">
                        <a href="\AboutUs">About Us</a>
                    </p>
                    <p className="hover:text-slate-400 hover:cursor-pointer">
                        <a href="/Events">Our Events</a>
                        </p>
                    <p className="hover:text-slate-400 hover:cursor-pointer">Our Blog</p>
                    <p className="hover:text-slate-400 hover:cursor-pointer">
                        <a href="/JoinUs">Join Us</a>
                    </p>
                    <p className="hover:text-slate-400 hover:cursor-pointer">
                        <a href="\ContactUs">Contact Us</a>
                    </p>
                    <input type="text" name="nama" placeholder="" className="w-[200px] h-8 border border-zinc-500 p-2 rounded-full items-center"></input>
                    <p className="flex items-center justify-center text-white bg-[#69b23b] w-[100px] h-8 rounded-full hover:cursor-pointer">
                        Search
                    </p>
                </div>

        </div>
     
    );
}

export default Navbar;