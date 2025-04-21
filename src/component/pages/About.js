import React from "react";

import m5 from "../../img/m5.png";
// import leetcode from "../../img/LeetCode.png";
import resume from "../../assest/Resume/Ankit general.docx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub, faLinkedinIn} from '@fortawesome/free-brands-svg-icons'
import {faBarChart, faLineChart, faBook } from "@fortawesome/free-solid-svg-icons";
import ServiceCom from "../page_component/Service_page.js";
import { Link } from "react-router-dom";


function About() {
    return (
        <div className="absolute bg-black z-20 w-screen">
            <div className="w-[90%] md:w-[80%] m-auto my-[10px] pt-[100px] px-2 ">
                <div className="text-center mb-[40px]">
                    <h1 className="text-[46px] mb-[37px] font-bold">About Me</h1>
                </div>
                <div className="flex g-4 flex-col md:flex-col lg:flex-row justify-between mb-[90px]">
                    <div className=" w-[100%] lg:w-[100rem] md:w-[100%]  pt-3">
                        <img className=" rounded-[20px] w-full h-full removeb" src={m5} alt="" />
                    </div>
                    <div className="">
                        <h2 className=" text-[25px] mb-4 font-bold text-[#009e66]">Who am I?</h2>
                        <p className="text-[27px] font-bold ">I'm Ankit Chaudhry, Data Analyst & Software Engineer </p>
                        <p className="text-[15px] text-[#9f9f9f] py-2"> I am a Data Analyst based in India, driven by a passion for turning raw data into actionable insights. Proficient in data collection, cleaning, and analysis, with hands-on experience using tools like Excel, SQL, and Python. Skilled in creating dashboards, reports, and visualizations to support data-driven decision-making and business growth.</p>
                        <div className="mt-4">
                            <div className="flex flex-col md:flex-row lg:flex-row about_content py-4">
                                <div className="w-full">
                                    <p className="py-2 w-max">Name: <span>Ankit Chaudhry</span></p>
                                    <p className="py-2 w-max">Age: <span>22</span></p>
                                </div>
                                <div className="w-[100%]  w-max">
                                    <p className="py-2 w-max">Email: <span><Link to="mailto:ankitchaudhry1259@gmail.com"  className="text-[#009e66]">ankitchaudhry1259@gmail.com</Link></span></p>
                                    <p className="py-2 w-max">From: <span>Vrindavan,India</span></p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row mt-4">
                            <div>
                                <a href={resume} download><button className="btn p-3 px-7 ">Downlode CV</button></a>
                            </div>

                            <div className="social_btn pt-7 md:p-3">
                                <a href="https://github.com/ankitchaudhry1259" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} className="px-2 text-xl hover_social  hover:text-[#009e66]" /></a>
                                <a href="https://www.linkedin.com/in/ankitchaudhry59/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedinIn} className="px-2 text-xl hover_social  hover:text-[#009e66]" /></a>
                    
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className="">
                    <h1 className="text-4xl font-bold mb-[100px]">My Services</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 ">
                        <ServiceCom 
                        name="Data Collection & Cleaning"
                        para="Gather data from various sources (databases, APIs, web scraping, etc.)"
                        icon={faBarChart}
                        />
                         <ServiceCom 
                        name="Data Visualization"
                        para="Create dashboards, charts, and graphs using tools like Tableau, Power BI, or Python (Matplotlib, Seaborn)."
                        icon={faLineChart}
                        />
                         <ServiceCom 
                        name="Reporting & Documentation
"
                        para="Develop comprehensive reports to summarize findings."
                        icon={faBook}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;