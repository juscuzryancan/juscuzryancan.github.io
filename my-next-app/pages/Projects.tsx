//TODO: add separate links for the deploy and the github links
import placeholder from "../public/placeholder.png";
import minesweeper from "../public/minesweeper.png";
import strangersThings from "../public/strangers_things.png";
import fitnessTracker from "../public/fitness_tracker.png";
import virtualTraders from "../public/virtual_traders.png";
import Image from "next/image";

const projectsArray = [
  {
    title: "Virtual Traders",
    link: "https://virtual-velocity-production.up.railway.app/" ,
    description: "Fullstack Ecommerce Website For Selling Trading Cards",
    img: virtualTraders
  },
  {
    title: "Fitness Trackr",
    link: "https://fitnesstrac-kr.onrender.com/" ,
    description: "Fullstack Website For Sharing Workouts",
    img: fitnessTracker
  },
  {
    title: "Stranger's Things",
    link: "https://kind-mahavira-29ba42.netlify.app/" ,
    description: "Frontend Application Built On React. Craigslist Clone.",
    img: strangersThings
  },
  {
    title: "Minesweeper",
    link: "https://flamboyant-liskov-0c5218.netlify.app/minesweeper/" ,
    description: "Javascript Clone Of Minesweeper",
    img: minesweeper
  },
];

const ProjectCard = ({
  title,
  link,
  description,
  img
}: any) => {

  return (
    <div className="relative group flex flex-col basis-1/5 flex-grow shadow-sm shadow-tertiary bg-primary w-60 text-slate-50
      rounded-md"
    >
      <a 
        className="h-full w-full"
        href={link} 
        target="_blank" 
        rel="noreferrer"
      >
        <Image className="rounded-md h-full w-full" src={img} alt="project" />
        <div className="hidden absolute p-8 h-full w-full top-0 left-0 flex-col items-center justify-center z-10
          before:content-[''] before:bg-tertiary/30 before:absolute before:w-full before:h-full before:rounded
          group-hover:flex"
        >
          <h4 className="text-slate-50">{title}</h4>
          <p>
            {description}
          </p>
        </div>
      </a>
    </div>
  );

}

const Projects = () => {

  return (
    <div 
      id="projects"
      className="bg-secondary m-4 p-4 shadow-2xl shadow-tertiary/20 
      sm:p-8 sm:m-16"
    >
      <h2 className="flex justify-center text-4xl px-8">Projects</h2>
      <div className="flex flex-col flex-grow p-8 gap-4
        sm:flex-row" id='projects'>
        {projectsArray.map((project, index) => <ProjectCard key={index} {...project}/>)}
      </div>
    </div>
  );

}

export default Projects;
