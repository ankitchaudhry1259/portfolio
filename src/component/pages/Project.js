
import React from "react";
import ProjectCard from "../page_component/Project_card";
import Revenue from "../../img/project/Revenue.jpg"
import Sales from "../../img/project/Sales.jpg"



function Project() {
    const text1="I created a model to predict how much of a product will be needed in the future using past sales data. I used tools like Python and Excel to find patterns and trends. This helps businesses plan better for stock, avoid shortages, and reduce waste."
    const text2="I analyzed sales data to understand which products, teams, or time periods performed the best. I used tools like Excel, Python, and Power BI to create charts and reports that help businesses see what's working and what needs improvement."
    return (
        <div className="absolute z-20 bg-black w-screen h-screen">
            <div className="w-[95%] m-auto mt-[50px] pt-[100px] h-screen ">
                <div className="text-center mb-[70px]">
                    <h1 className="text-[46px] mb-[37px] font-bold">Project</h1>

                    <ProjectCard para={text1}  img={Revenue} heading={"Product Demand Forcasting"}  rev={"md:flex-row"}/>
                    <ProjectCard  img={Sales}  heading={"Sales Performance Analysis"} para={text2} rev={"md:flex-row-reverse"}/>
                     </div>

            </div>
        </div>
    );
};

export default Project;