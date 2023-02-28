import React from "react";

function ProjectItem({ title, imgUrl, stack, link}) {
    return (
        <div>
            <img src={imgUrl}
             alt="projects"
            className="w-full h-36 md:h-48 object-cover cursor-pointer"/>
        <div className="w-full"></div>
        </div>
    )
}

export default ProjectItem;