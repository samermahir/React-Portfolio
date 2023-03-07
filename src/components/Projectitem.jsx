import React from "react";

function ProjectItem({ title, imgUrl, stack, link}) {
    return (
        <a href={link} target="_blank"
        className="relative justify-center items-center h-auto w-full shadow-xl shadow-gray-500 rounded-md overflow-hidden hover:scale-110 duration-200">
            <img src={imgUrl}
             alt="projects"
            className="w-full h-36 md:h-48 object-cover cursor-pointer"/>
        <div className="w-full p-4">
            <h3 className="text-lg md:text-xl mb-2 md:md-3 font-semibold">{title}</h3>
            <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm">
                {stack.map(item => (
                    <span className="inline-block px-2 py-1 font-semibold  rounded-md">
                        {item}
                    </span>
                ))}
            </p>
        </div>
        
        </a>
    )
}

export default ProjectItem;