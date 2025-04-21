import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserSecret, faMapLocationDot, faMobileScreen, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

function Contact() {

    const [email, setemail] = useState()
    const [sent,setsent]=useState("Submit");
    const [btn,setbtn]=useState(false)
    const getForm=useRef()

    const Handleform = async (e) => {
        e.preventDefault();
        setsent("Sending...")
        setbtn(true)
        console.log("press")
            const name=document.querySelector('#name').value
            const subject= document.querySelector('#subject').value
            const message= document.querySelector('#message').value
        
            axios.post('/contact',{
                name,
                subject,
                message,
                email
            }).then((response)=>{
                console.log('Message sent successfully:', response.data);
                setsent("Sent");
                setbtn(false)
                getForm.current.reset();
            }).catch((error)=>{
                console.error('Error sending message:', error);
                setsent("Fail to send")
                setbtn(false)
            })
            
    }

    return (
        <div className="absolute z-30 w-screen h-screen">
            <div className="w-[100%] md:w-[80%] m-auto mt-[50px] pt-[100px]">
                <div className="text-center">
                    <h1 className="text-[46px] mb-[37px] font-bold">Get in Touch</h1>
                </div>
                <div className="flex md:flex-row flex-col">
                    <div className=" md:w-[50%] w-full">
                        <form onSubmit={Handleform} ref={getForm} className="flex flex-col gap-6 p-5" >
                            <lable className="text-[25px] mb-2">Message Me</lable>
                            <div className="flex flex-col lg:flex-row gap-4">
                                <input type="text" id="name" placeholder="Name" className="w-full form_field" required />
                                <input type="text" id="email" onChange={(e) => setemail(e.target.value)} placeholder="Email" className="w-full form_field" required />
                            </div>
                            <input type="text" id="subject" placeholder="Subject" className="w-full form_field" required />
                            <textarea rows={4} type="text" id="message" placeholder="Message" className="w-full form_field1" required />
                            <button className="bg-[#009e66] py-[10px] px-[26px] rounded" disabled={btn} type="submit">{sent}</button>
                        </form>
                    </div>
                    <div className=" md:w-[50%] w-full p-5">
                        <div className="info">
                            <h2 className="text-[25px] mb-[12px] leading-normal">Contact Info</h2>
                            <p className="text-[#9f9f9f] text-[15px] mb-[28px]">Always available for freelance work if the right project comes along, Feel free to contact me!</p>
                            <ul className="contact_parent">
                                <li className="flex">
                                    <div className="Icon_ad">
                                        <span className="size_icon">
                                            <FontAwesomeIcon icon={faUserSecret} color="#009e66" />
                                        </span>
                                    </div>
                                    <div className="border_side relative bottom-[10px]">
                                        <h4 className="text-[15px] font-medium ">Name</h4>
                                        <span className="text-[#9f9f9f]">Ankit Chaudhry</span>
                                    </div>
                                </li>
                                <li className="flex">
                                    <div className="Icon_ad">
                                        <span className="size_icon">
                                            <FontAwesomeIcon icon={faMapLocationDot} color="#009e66" />
                                        </span>
                                    </div>
                                    <div className="border_side relative bottom-[10px]">
                                        <h4 className="text-[15px] font-medium">Location</h4>
                                        <span className="text-[#9f9f9f]">Vrindavan, Uttar Pradesh</span>
                                    </div>
                                </li>
                                <li className="flex">
                                    <div className="Icon_ad">
                                        <span className="size_icon">
                                            <FontAwesomeIcon icon={faMobileScreen} color="#009e66" />
                                        </span>
                                    </div>
                                    <div className="border_side relative bottom-[10px]">
                                        <h4 className="text-[15px] font-medium">Call Me</h4>
                                        <span className="text-[#9f9f9f]"><a href="tel:8979921667">+91 8979921667</a></span>
                                    </div>
                                </li>
                                <li className="flex">
                                    <div className="Icon_ad">
                                        <span className="size_icon">
                                            <FontAwesomeIcon icon={faPaperPlane} color="#009e66" />
                                        </span>
                                    </div>
                                    <div className="border_side relative bottom-[10px]">
                                        <h4 className="text-[15px] font-medium">Email Me</h4>
                                        <span className="text-[#9f9f9f]" ><a href="mailto:ankitchaudhry1259@gmail.com">ankitchaudhry1259@gmail.com</a></span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;