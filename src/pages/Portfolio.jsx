import { useState } from 'react'
import ProjectCard from '../components/ProjectCard'

function Portfolio() {
    const [showProjects, setShowProjects] = useState(false)
    return (
        <section>
            <h1>My projects</h1>
            <button onClick={() => setShowProjects(true)}>Show projects</button>
            {showProjects && (
                <section className="projects">

                    <ProjectCard
                        name="Typing Game"
                        screenshot="/Images/typing-game.jpeg"
                        github="https://github.com/patrikhilton/typing-game-starter-master"
                        tech="HTML, CSS, JavaScript (DOM)"
                        whatItDoes="A typing game where a random word appears and you type it before the time runs out. Each correct word gives a point and 5 extra seconds. When the time reaches zero, a game-over screen shows your score."
                        learned="How to change a web page with JavaScript (the DOM), how to react to typing with an event listener, and how to make a countdown with setInterval and stop it with clearInterval."
                        role="Solo project, built on the teacher's HTML and CSS starter code."
                        challenges="Getting the timer to stop at zero."
                    />
                    <ProjectCard
                        name="Savings Goal Planner"
                        screenshot="/Images/savings-planner.jpeg"
                        github="https://hitapstudio.se/tools/savings-planner/"
                        tech="HTML, CSS, JavaScript (DOM)"
                        whatItDoes="A tool that shows how long it will take to reach a savings goal. You enter your goal, what you've already saved and your monthly saving, and it calculates the months left. It's live on my business website, Hitap Studio."
                        learned="How to read values from input fields, convert them to numbers with parseFloat, and show the result on the page with JavaScript."
                        role="Solo project, built for my own business website."
                        challenges="Making the calculation work correctly and styling it to match the Hitap Studio website."
                    />
                    <ProjectCard
                        name="Bank Account ATM"
                        screenshot="/Images/bank-account.png"
                        github="https://github.com/patrikhilton/Javascript-training.git"
                        tech="JavaScript (objects, functions, switch, prompt/alert)"
                        whatItDoes="A simple ATM in the browser. You choose from a menu to see your balance, deposit or withdraw money, see the account name, or exit."
                        learned="How to build an object with properties and methods, use 'this', and keep the logic (the object) separate from the user interface (the atm function)."
                        role="Solo project."
                        challenges="Stopping errors like withdrawing more than the balance or typing letters instead of a number. I fixed a NaN bug with isNaN() and added the atm() menu after feedback from my teacher."
                    />
                </section>
                )}
        </section>
    )
}

export default Portfolio