import './styles.css';
//TODO: add separate links for the deploy and the github links

const Projects = () => {
    const projectsArray = [
        {
            title: "Virtual Traders",
            link: "http://virtual-traders.herokuapp.com/" ,
            description: "Fullstack Ecommerce Website For Selling Trading Cards"
        },
        {
            title: "Fitness Trackr",
            link: "https://ftnss-trckr.herokuapp.com/" ,
            description: "Fullstack Website For Sharing Workouts"
        },
        {
            title: "Stranger's Things",
            link: "https://kind-mahavira-29ba42.netlify.app/" ,
            description: "Frontend Application Built On React. Craigslist Clone."
        },
        {
            title: "Minesweeper",
            link: "https://flamboyant-liskov-0c5218.netlify.app/minesweeper/" ,
            description: "Javascript Clone Of Minesweeper"
        },
    ];

    return (
      <section>
        <div className='projects' id='projects'>
            <h3>Projects</h3>
            {projectsArray.map(({title, link, description}, index) => {
                return (
                    <div className="project" key={index}>
                        <a href={link} target="_blank" rel="noreferrer">
                            <h4>{title}</h4>
                        </a>
                        <p>
                            {description}
                        </p>
                    </div>
                );
            })}
        </div>
      </section>
    );
}

export default Projects;
