import React from "react";
import project from "./Projectdata/project";
import ProjectItem from "./Projectitem";

function Projects() {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {project.map(portfolio => (
                    <ProjectItem
                        imgUrl={portfolio.imgUrl}
                        title={portfolio.title}
                        stack={portfolio.stack}
                        link={portfolio.link}
                    />
                ))}
            </div>
        </div>
    )
}

export default Projects;