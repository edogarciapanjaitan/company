'use client'

import React from "react"

const Footer = () => {
    return(
        <div className="mt-10 w-screen">
            <div className="flex justify-between text-slate-500">
                <div className="flex flex-col">
                    <ul className="mb-2">
                        <a href="/Home" className="font-semibold text-[22px] hover:text-lime-500">Home</a>
                    </ul>
                        <p>About Us</p>
                        <p>Our Event</p>
                        <p>Our Blog</p>
                        <p>Join Us</p>
                        <p>Collaborate With Us</p>
                </div>
                <div className="flex">
                    <div className="flex flex-col">
                        <ul className="mb-2">
                            <a href="/AboutUs" className="font-semibold text-[22px] hover:text-lime-500">About Us</a>
                        </ul>
                            <p>Our Business</p>
                            <p>Rumah Kedua</p>
                            <p>Our Contribution</p>
                            <p>Our Nutrihub</p>
                            <p>Our Publication</p>
                            <p>Privacy Policy</p>
                    </div>
                </div>
                <div className="flex">
                    <div className="flex flex-col">
                        <ul className="mb-2">
                            <a href="Events" className="font-semibold text-[22px] hover:text-lime-500">Our Events</a>
                        </ul>
                            <p>Nutrifood</p>
                            <p>Leadership Award</p>
                            <p>Nutrifood Research</p>
                            <p>Center Fellowship</p>
                    </div>
                </div>
                <div className="flex">
                    <p>
                        <a className="font-semibold text-[22px] hover:text-lime-500" href="">Our Blog</a>
                    </p>
                </div>
                <div className="flex">
                    <div className="flex flex-col">
                        <ul className="mb-2">
                            <a className="font-semibold text-[22px] hover:text-lime-500" href="/JoinUs">Join Us</a>
                        </ul>
                            <p>Vacancy</p>
                            <p>Submit CV</p>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Footer;