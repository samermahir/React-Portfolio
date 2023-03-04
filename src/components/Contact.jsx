import React from "react";
import Title from "./Title";

function Contact() {
    return (
        <div id="Contact" className="max-w-[1040px] m-auto p-4 py-16">
            <h1 className="text-4xl font-bold text-center ">Contact</h1>
                <p className="text-center py-8"></p>
               <div className="grid sm:grid-cols-2 gap-12">
                <form 
                action="https://getform.io/f/4e43611a-4ebc-406a-ac5e-3408fba93877"
                method="POST"
                className="flex flex-col w-full md:w-7/12"
                >
                    
                    <input 
                    type="text"
                    name="name" 
                    placeholder="Name"
                    className="p-2 bg-transparent border-2
                    rounded-md focus:outline-none"
                    />
                     <input 
                    type="text"
                    name="email" 
                    placeholder="Email"
                    className="my-2 p-2 bg-transparent border-2 
                    rounded-md focus:outline-none"
                    />
                    <textarea 
                        name="message"
                        placeholder="Message" 
                        rows="10"
                        className="p-2 mb-4 bg-transparent border-2 
                        rounded-md focus:outline-none"
                        ></textarea>
                        <button 
                        type="button"
                        className="text-center inline-block px-8
                        py-3 w-max text-base font-medium rounded-md
                        text-white bg-gradient-to-r from-gray-400 to-black-400
                        drop-shadow-md">
                            Message Me
                        </button>
                    
                </form>
            </div>
        </div>
    )
}

export default Contact;