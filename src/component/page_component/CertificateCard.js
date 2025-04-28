import React from "react";
import { Typewriter } from 'react-simple-typewriter';


function CertificateCard({
    img,
    heading,
    para,
    rev,
    date,
}) {
    return (
        <div className={`flex ${rev} flex-col border mt-10 py-5 md:p-5 glass`}>
            <div className="w-full md:w-1/3 p-0 md:p-0 rounded rounded-xl" >
                <img src={img} alt="" className="w-[100%] h-[100%]"/>
            </div>
            <div className="w-full md:w-2/3 ">
                <div>
                    <h1 className="text-[#099e66] text-2xl pt-5 md:pt-0">
                        <Typewriter
                            words={[heading]}
                            loop={false}
                            cursor
                            cursorStyle='|'
                            typeSpeed={100}
                            deleteSpeed={100}
                            delaySpeed={1000}
                        />
                    </h1>
                    <p className="py-5 px-9 text-[#777] leading-6 tracking-[1px] text-left">{para}</p>
                    <p className="py-5 px-9 text-[#888] leading-0 text-left">{date}</p>
                </div>
            </div>
        </div>
    )
}

export default CertificateCard;