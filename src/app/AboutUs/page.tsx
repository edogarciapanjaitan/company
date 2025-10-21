'use client'

import React from "react"
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";

const AboutUs = () => {
    return (
         <div className="w-screen" id="contact">
                <div className="bg-[#1d87a6] top-0 h-20"></div>
                <Navbar />
                <div className="flex relative">
                    <img className="h-[800px]"src=".\assets\about1.png" alt="contact" />
                    <div className="bg-[#1d87a6] w-1/2 opacity-80 absolute h-full flex flex-col left-0 text-white text-lg">
                        <div className="p-23">
                            <h1 className="text-6xl mb-6">Our Business</h1>
                            <span className="mb-6">For 45 years, we have been committed to inspire and foster a healthy and joyful life, both physically and mentally, through our very own distinctive and premium brands: Tropicana Slim, NutriSari, L-Men, HiLo, Wdank, and Lokalate as well as related services and programs. Founded in Semarang, Indonesia, Nutrifood has been distributing the products all across more than 30 countries.</span>
                            
                            <p className="mt-6">Our business is developed based on scientific knowledge. We believe prevention is better than cure, therefore through Nutrifood Research Center, together with the academic community, we shall continuously search for more knowledge and findings, in order to inspire healthier society by managing sugar, salt and fat intake (#BatasiGGL).
                            </p>
                            <p className="mt-6">Get our healthy product online at Nutrimart.</p>
                            <p className="flex h-[50px] w-[75px] mt-6 gap-3">
                                <img className="flex flex-wrap" src="/assets/ts.png" alt="ts"/>
                                <img className="flex flex-wrap" src="/assets/hilo.png" alt="ts"/>
                                <img className="flex flex-wrap" src="/assets/ns.png" alt="ts"/>
                                <img className="flex flex-wrap" src="/assets/wdank.png" alt="ts"/>
                                <img className="flex flex-wrap" src="/assets/lokalate.png" alt="ts" />
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex relative">
                    <img className="h-[700px]"src=".\assets\about2.png" alt="contact" />
                    <div className="bg-[#1d87a6] w-1/2 opacity-100 absolute h-full flex flex-col right-0 text-white text-lg">
                        <div className="p-23">
                            <h1 className="text-6xl mb-6">Our Second Home</h1>
                            <span className="mb-6 text-[16px]">For us, our office is our second home (Rumah Kedua). Every bit is designed to create the feeling of being at home, where we are comfortable, mostly creative, and where we could have the positive mood of collaboration. Just as at home, we value honesty, integrity, and also respect differences, so that everyone could focus and strive for excellence.</span>
                            
                            <p className="mt-6 text-[16px]">Our second home also encourages everyone to eat and exercise well, to act an environmental-friendly attitude, and to bring-forth the spirit of youth, with which we believe can contribute very well to growth and innovation..
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex relative">
                    <img className="h-[700px]"src=".\assets\about3.jpeg" alt="contact" />
                    <div className="bg-[#1d87a6] w-1/2 opacity-100 absolute h-full flex flex-col left-0 text-white text-lg">
                        <div className="p-23">
                            <h1 className="text-6xl mb-6">Our Contributions</h1>
                            <span className="mb-6 text-[16px]">We are committed to be a part of global movement in achieving <span className="text-black"> Sustainable Development Goals</span>, primarily by contributing and making positive impact to people health and well-being, the environment, education, and inclusivity.
                            </span>
                            
                            <p className="mt-6 text-[16px]">We actively collaborate with multiple stakeholders, including government, non-profit organizations, communities, media, and public, in spreading the practice of healthy lifestyle, implementing an <span className="text-black">eco-friendly business practice</span>, empowering youth as future leaders, and creating an inclusive workplace.
                            </p>

                            <p className="mt-6 text-[16px]">Kindly check <span className="text-black">Our Sustainability Video</span> or <span className="text-black">Our Sustainability Stories</span> for more details on our contributions.</p>
                        </div>
                    </div>
                </div>
                <div className="flex relative">
                    <img className="h-[550px]" src=".\assets\about4.jpg" alt="contact" />
                    <div className="bg-[#1d87a6] w-1/2 opacity-100 absolute h-full flex flex-col right-0 text-white text-lg">
                        <div className="p-23">
                            <h1 className="text-6xl mb-6">NutriHub: A Hub for Communities</h1>
                            <span className="mb-6 text-[16px]">Nutrihub is home for leaders, communities, and entrepreneurs to collaborate and make positive impact focused on inspiring a nutritious life through health, education, green, and inclusive pillars. Our NutriHub is available at several cities in Indonesia, such as Serpong, Bandung, Yogyakarta, and it is still counting in near future.</span>
                            
                            <p className="mt-6 text-[16px] text-black">Click here to find out more about Nutrihub in your city!</p>
                        </div>
                    </div>
                </div>
                <div className="flex relative">
                    <img className="h-[655px] w-full ml-[550px]" src=".\assets\about5.jpg" alt="contact" />
                    <div className="bg-[#1d87a6] w-1/2 opacity-90 absolute flex flex-wrap text-white text-lg">
                        <div className="p-20">
                            <h1 className="text-6xl mb-6">Our Publication</h1>
                            <span className="mb-6 text-[16px]">Nutrifood Research Center (NRC) helps fulfill Nutrifood mission of Inspiring Nutritious Life through high quality research studies. We believe that prevention is better than cure and science is the foundation of our product development. Therefore, we established NRC to collaborate with academic communities and explore the latest discoveries and developments in nutrition and health area.</span>
                            
                            <p className="mt-5 text-[16px]">NRC is actively engaged in various research programs, which can be independent or in collaboration with academic communities. Some major research topics carried out by NRC are functional foods, nutritional genomics, microbiome, and metabolic syndrome markers. Our research results are published in national and international journals and presented at various international conferences.</p>

                            <p className="mt-6 text-[16px] text-black">Check Our Publication</p>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        
    );
}

export default AboutUs;