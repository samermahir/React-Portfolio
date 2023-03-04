import React from "react";
import project from "./Projectdata/project";
import ProjectItem from "./Projectitem";
import Title from "./Title";

function Projects() {
    return (
        <div id="Projects" className="max-w-[1040px] m-auto p-4 py-16">
            <h1 className="text-4xl font-bold text-center ">Projects</h1>
                <p className="text-center py-8"></p>
               <div className="grid sm:grid-cols-2 gap-12">
                {project.map(project => (
                    <ProjectItem
                        imgUrl={project.imgUrl}
                        title={project.title}
                        stack={project.stack}
                        link={project.link}
                    />
                ))}
                </div>
            </div>
        
    )
}

export default Projects;