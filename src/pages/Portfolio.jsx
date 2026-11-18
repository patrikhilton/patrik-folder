import { useState } from 'react'
import ProjectCard from '../components/ProjectCard'
import projects from '../data/projects'

function Portfolio() {
    const [showProjects, setShowProjects] = useState(false)
    return (
        <section>
            <h1>My projects</h1>
            <button className="preview-button" onClick={() => setShowProjects(true)}>Show projects</button>
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
                            onClick={() => console.log(project.name)}
                        />
                    ))}
                </section>
            )}
        </section>
    )
}

export default Portfolio