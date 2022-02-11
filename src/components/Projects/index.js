import './styles.css';

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
        <div className='projects'>
            <h3>Projects</h3>
            {projectsArray.map(({title, link, description}) => {
                return (
                    <section className="project">
                        <a href={link} target="_blank">
                            <h4>{title}</h4>
                        </a>
                        <p>
                            {description}
                        </p>
                    </section>
                );
            })}
        </div>
    );

    // return (

    //     <div className='projects'>
    //         <h3>Projects</h3>
    //         <div>
    //             <a href="http://virtual-traders.herokuapp.com/">Virtual Traders</a>
    //         </div>
    //         <div>
    //             <a href="https://ftnss-trckr.herokuapp.com/">Fitness Trackr</a>
    //         </div>
    //         <div>
    //             <a href="https://kind-mahavira-29ba42.netlify.app/">Strangers Things</a>
    //         </div>
    //         <div>
    //             <a href="https://flamboyant-liskov-0c5218.netlify.app/minesweeper/">Minesweeper</a>
    //         </div>
    //     </div>
    // );
}

export default Projects;