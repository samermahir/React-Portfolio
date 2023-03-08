import React from "react";
// import Title from "./Title";
import IMG_4418 from "/assets/IMG_4418.jpg";


function About() {
    return (
        <div id="About" className="max-w-[1040px] m-auto p-4 py-16">
        <h1 className="text-4xl font-bold text-center ">About Me</h1>
            <p className="text-center py-8"></p>
           <div className="grid sm:grid-cols-2 gap-12">
            <p className="text-lg max-w-xl mb-6 font-bold text-center">My name is Samer Mahir, and I am currently enrolled in the UCI web developer bootcamp.
             I have 13 years experience in the customer service sector and 
             5 years of manufacturing experience as a machine operator for International Paper.</p>
             
             <img src={IMG_4418} alt="IMG_4418" />
             
             {/* <a href="mailto:samermahir@yahoo.com"
             className="block mt-3 text-md md:text-lg font-bold
             font-regular text-gray-500 hover:text-blue-500">samermahir@yahoo.com</a> */}
        </div>
        
    </div>
    )
}

export default About;