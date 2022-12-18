//TODO: add separate links for the deploy and the github links
import placeholder from "../assets/placeholder.png";

const ProjectCard = ({
  title,
  link,
  description
}) => {

  return (
    <div className="relative group flex flex-col basis-1/5 flex-grow shadow-sm shadow-tertiary bg-primary w-60 text-slate-50
      rounded-md
      hover:animate-bounce
      ">
      <a 
        className="group
        "
        href={link} 
        target="_blank" 
        rel="noreferrer"
      >
        <img src={placeholder} />
        <div className="hidden absolute h-full w-full top-0 left-0 flex-col items-center justify-center z-10
        before-content-[''] before:bg-tertiary/60 before:absolute before:w-full before:h-full
          group-hover:flex 
        ">
          <h4>{title}</h4>
          <p>
            {description}
          </p>
        </div>
      </a>
    </div>
  );
}

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
    <div 
      id="projects"
      className="bg-secondary p-8 m-8 shadow-2xl shadow-tertiary/20"
    >
      <h2 className="text-4xl px-8">Projects</h2>
      <div className="flex flex-grow p-8 gap-4" id='projects'>
        {projectsArray.map((project, index) => <ProjectCard key={index} {...project}/>)}
      </div>
    </div>
  );
}

export default Projects;
