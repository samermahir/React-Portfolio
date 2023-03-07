import React from "react";
import { AiFillGithub } from 'react-icons/ai';

function Footer() {
    return (
        <div className="py-5 text-center className">
            {" "}<AiFillGithub />{" "}
            {'\n'}
           
            <p className="text-sm mt-2 opacity-50">
                
                &copy; {new Date().getFullYear()} Samer Mahir. All rights reserved.
            </p>
        </div>
    )
}

export default Footer;