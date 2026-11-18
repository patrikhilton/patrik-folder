import { useState } from 'react'
import ProjectCard from '../components/ProjectCard'
import projects from '../data/projects'

function Portfolio() {
    const [showProjects, setShowProjects] = useState(false)
    const [selectedProject, setSelectedProject] = useState(null)
    return (
        <section>
            <h1>My projects</h1>
            <button className="preview-button" onClick={() => setShowProjects(prev => !prev)}>
                {showProjects ? "Hide projects" : "Show projects"}
            </button>

            {selectedProject && <p>Selected: {selectedProject.name}</p>}


            {showProjects && (
                <section className="projects">

                    {projects.map((project) => (
                        <ProjectCard
                            key={project.name}
                            name={project.name}
                            screenshot={project.screenshot}
                            github={project.github}
                            tech={project.tech}
                            whatItDoes={project.whatItDoes}
                            learned={project.learned}
                            role={project.role}
                            challenges={project.challenges}
                            onClick={() => setSelectedProject(project)}
                        />
                    ))}
                </section>
            )}
        </section>
    )
}

export default Portfolio