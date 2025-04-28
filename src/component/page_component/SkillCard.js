import React from "react";
function SkillCard({
    img
}) {
    return (
        <div className="p-0 md:p-3 rounded rounded-xl bg-[#353935]" >
            <center>
                <img src={img} alt="" height={200} width={200}/>
            </center>
        </div>
    )
}
export default SkillCard;