
import React from "react";
import Cert1 from "../../assest/R certifictes_page-0001.jpg"
import Cert2 from "../../assest/nptel.jpg"
import Cert3 from "../../assest/java.jpg"
import CertificateCard from "../page_component/CertificateCard";



function Certificates() {
    const text1="Completed R Programming from Johns Hopkins University on Coursera. Gained skills in data analysis, programming in R, data visualization, writing functions, debugging, and working with datasets."
    const text2="Completed Software Testing course from NPTEL. Gained knowledge in testing techniques, test case design, automation basics, debugging, unit testing, integration testing, and ensuring software quality and reliability."
    const text3="Completed Programming Using Java from Cipher School. Learned core Java concepts, object-oriented programming, exception handling, collections, file handling, and built basic applications using Java."
    return (
        <div className="absolute z-20 bg-black w-screen h-screen">
            <div className="w-[95%] m-auto mt-[50px] pt-[100px] h-screen ">
                <div className="text-center mb-[70px]">
                    <h1 className="text-[46px] mb-[37px] font-bold">Certificates</h1>
                    <CertificateCard
                      para={text2}
                      img={Cert2} 
                      heading={"Software Testing"}  
                      rev={"md:flex-row"}
                      date={"October 2024"}/>
                    <CertificateCard
                      para={text3}
                      img={Cert3} 
                      heading={"Training in Java"}  
                      rev={"md:flex-row-reverse"}
                      date={"July 2024"}/>
                    <CertificateCard
                      para={text1}
                      img={Cert1} 
                      heading={"R Programming"}  
                      rev={"md:flex-row"}
                      date={"April 2024"}/>

                    
                </div>

            </div>
        </div>
    );
};

export default Certificates;