import React from "react";
import Title from "./Title";

function About() {
    return (
        <div>
            <div className="py-5 mb-6 justify-center items-center w-full md:w-6/12">
            <Title>About Me</Title>
            <p className="text-sm max-w-xl mb-6 font-bold">My name is Samer Mahir, and I am currently enrolled in the UCI web developer bootcamp.
             I have 13 years experiance in the customer service sector and 
             5 years of manufacturing experience as a machine operator for International Paper.</p>
             <a href="mailto:samermahir@yahoo.com"
             className="block mt-3 text-md md:text-lg font-bold
             font-regular text-gray-500 hover:text-blue-500">samermahir@yahoo.com</a>
        </div>
        
    </div>
    )
}

export default About;