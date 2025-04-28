
import React from "react";
import Java from './../../img/skills/java.avif'
import Python from './../../img/skills/python.avif'
import R from './../../img/skills/r.avif'
import SQL from './../../img/skills/sql.avif'

import Excel from './../../img/Tools/MS Excel.avif';
import PowerBI from './../../img/Tools/PowerBI.avif';
import Tableau from './../../img/Tools/Tableau.avif';
import MySQL from './../../img/Tools/MySQL.avif';

import SkillCard from "../page_component/SkillCard";


function Skills() {
    return (
        <div className="absolute z-20 bg-black w-screen h-screen">
            <div className="w-[95%] m-auto mt-[50px] pt-[100px] h-screen ">
                <div className="text-center mb-[70px]">
                    <h1 className="text-[46px] mb-[37px] font-bold">Skills</h1>
                    <div className="grid grid-cols-4 gap-4">
                        <SkillCard img={Java} />
                        <SkillCard img={Python} />
                        <SkillCard img={R} />
                        <SkillCard img={SQL} />
                    </div>

                    <h1 className="text-[46px] mb-[37px] mt-[20px] font-bold">Tools</h1>
                    <div className="grid grid-cols-4 gap-4">
                        <SkillCard img={Excel} />
                        <SkillCard img={PowerBI} />
                        <SkillCard img={Tableau} />
                        <SkillCard img={MySQL} />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Skills;