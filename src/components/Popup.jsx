function Popup(props) {
  return (
    <div className="popup-overlay">
      <div className="popup">
        <button className="popup__close" onClick={props.onClose}>✕</button>

        <img className="popup__image" src={props.screenshot} alt={props.name} />
        <h2>{props.name}</h2>
        <p className="popup__tech">{props.tech}</p>

        <h3>What it does</h3>
        <p>{props.whatItDoes}</p>

        <h3>What I learned</h3>
        <p>{props.learned}</p>

        <h3>My role</h3>
        <p>{props.role}</p>

        <h3>Challenges I solved</h3>
        <p>{props.challenges}</p>

        <a className="popup__link" href={props.github} target="_blank" rel="noopener noreferrer">
          View on GitHub
        </a>
      </div>
    </div>
  )
}

export default Popup