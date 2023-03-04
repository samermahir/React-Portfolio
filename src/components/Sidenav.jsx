import React, {useState} from "react";
import { AiOutlineMenu, AiOutlineHome, AiOutlineProject, AiOutlineMail } from 'react-icons/ai';
import {BsPerson} from 'react-icons/bs'


const Sidenav = () => {

    const [nav, setNav] = useState(false);
    const handleNav =  () => {
        setNav(!nav);
    };

    return (
        <div>
            <AiOutlineMenu onClick={handleNav} className="absolute top-4 right-4 z-[99] "/>
            {
                nav ? (
                    <div className="fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20">
                        <a onClick={handleNav}
                         href="#Homepage" className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 hover:scale-110 ease-in duration-200 ">
                            <AiOutlineHome side={20} />
                            <span className="pl-4">Home</span>
                        </a>
                        <a onClick={handleNav}
                         href="#Homepage" className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 hover:scale-110 ease-in duration-200 ">
                            <AiOutlineProject side={20} />
                            <span className="pl-4">Projects</span>
                        </a>
                        <a onClick={handleNav}
                         href="#Homepage" className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 hover:scale-110 ease-in duration-200 ">
                            <BsPerson side={20} />
                            <span className="pl-4">About Me</span>
                        </a>
                        <a onClick={handleNav}
                         href="#Homepage" className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 hover:scale-110 ease-in duration-200 ">
                            <AiOutlineMail side={20} />
                            <span className="pl-4">Contact</span>
                        </a>
                    </div>
                )
                : (
                    <div></div>
                )
            }
            <div className=" fixed top-[25%] z-10 ">
                <div className="flex flex-col">
                    <a href="Homepage" className=" rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 hover:scale-110 ease-in duration-300">
                        <AiOutlineHome side={20} />
                    </a>
                    <a href="Projects" className=" rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 hover:scale-110 ease-in duration-300">
                        <AiOutlineProject side={20} />
                    </a>
                    <a href="About" className=" rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 hover:scale-110 ease-in duration-300">
                        <BsPerson side={20} />
                    </a> 
                    <a href="Contact" className=" rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 hover:scale-110 ease-in duration-300">
                        <AiOutlineMail side={20} />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Sidenav;