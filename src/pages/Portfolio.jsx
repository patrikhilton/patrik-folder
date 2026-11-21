import { useState } from 'react'
import ProjectCard from '../components/ProjectCard'
import projects from '../data/projects'
import Popup from '../components/Popup'

function Portfolio() {
    const [showProjects, setShowProjects] = useState(false)
    const [selectedProject, setSelectedProject] = useState(null)
    const [search, setSearch] = useState("")

    const filteredProjects = projects.filter(project =>
        project.name.toLowerCase().includes(search.toLowerCase()) ||
        project.tech.toLowerCase().includes(search.toLowerCase())
    )

    return (
        <section>
            <h1>My projects</h1>
            <button className="preview-button" onClick={() => setShowProjects(prev => !prev)}>
                {showProjects ? "Hide projects" : "Show projects"}
            </button>

            <input
  className="search-input"
  type="text"
  placeholder="Search projects..."
  value={search}
  onChange={(event) => setSearch(event.target.value)}
/>

            {selectedProject && (
                <Popup
                    name={selectedProject.name}
                    screenshot={selectedProject.screenshot}
                    github={selectedProject.github}
                    tech={selectedProject.tech}
                    whatItDoes={selectedProject.whatItDoes}
                    learned={selectedProject.learned}
                    role={selectedProject.role}
                    challenges={selectedProject.challenges}
                    onClose={() => setSelectedProject(null)}
                />
            )}


            {showProjects && (
                <section className="projects">

                    {filteredProjects.map((project) => (
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