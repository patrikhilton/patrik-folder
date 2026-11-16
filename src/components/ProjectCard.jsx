function ProjectCard(props) {
  return (
    <article className="project-card">
      <img className="project-card__image" src={props.screenshot} alt={props.name} />
      <div className="project-card__content">
        <h2 className="project-card__title">{props.name}</h2>
        <p className="project-card__tech">{props.tech}</p>

        <h3>What it does</h3>
        <p>{props.whatItDoes}</p>

        <h3>What I learned</h3>
        <p>{props.learned}</p>

        <h3>My role</h3>
        <p>{props.role}</p>

        <h3>Challenges I solved</h3>
        <p>{props.challenges}</p>

        <a className="project-card__link" href={props.github} target="_blank" rel="noopener noreferrer">
          View on GitHub
        </a>
      </div>
    </article>
  )
}

export default ProjectCard