import React from "react";
import project from "./Projectdata/project";
import ProjectItem from "./Projectitem";
import Title from "./Title";

function Projects() {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Title>Projects</Title>
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