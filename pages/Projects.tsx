//TODO: add separate links for the deploy and the github links
import placeholder from "../public/placeholder.png";
import minesweeper from "../public/minesweeper.png";
import strangersThings from "../public/strangers_things.png";
import fitnessTracker from "../public/fitness_tracker.png";
import virtualTraders from "../public/virtual_traders.png";
import Image from "next/image";
import Head from "next/head";
import { motion as m } from "framer-motion";

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
    <div className="relative group basis-4/5 flex flex-wrap flex-col shadow-sm shadow-tertiary bg-primary text-slate-50
      rounded-md
      sm:basis-1/5 sm:flex-grow sm:h-[350px]"
    >
      <a 
        className="h-full w-full"
        href={link} 
        target="_blank" 
        rel="noreferrer"
      >
        <Image className="rounded-md h-full w-full" src={img} alt="project" />
        <div className="hidden absolute p-8 h-full w-full top-0 left-0 flex-col items-center justify-center z-10 text-white
          before:content-[''] before:bg-black/70 before:absolute before:w-full before:h-full before:rounded
          group-hover:flex"
        >
          <h4 className="z-20">{title}</h4>
          <p className="z-20">
            {description}
          </p>
        </div>
      </a>
    </div>
  );

}

const Projects = () => {

  return (
    <>
      <Head>
        <title>Ryan Riley Puzon</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/ryfav.PNG" />
      </Head>
      <m.div 
        initial={{y: "100%"}}
        animate={{y: "0%"}}
        transition={{duration: 0.75, ease: "easeOut"}}
        exit={{opacity: 1}}
        id="projects"
        className="absolute top-0 left-0 
        pt-16
        w-full
        flex flex-col
        bg-secondary 
        flex-grow 
        shadow-2xl shadow-tertiary/20
        dark:bg-primary dark:text-white
        sm:h-screen sm:w-screen"
      >
        <h2 className="flex justify-center text-4xl px-8">Projects</h2>
        <div className="flex flex-col flex-grow items-center gap-4 
          p-8
          sm:flex-row sm:items-start sm:px-4" id='projects'>
          {projectsArray.map((project, index) => <ProjectCard key={index} {...project}/>)}
        </div>
      </m.div>
    </>
  );

}

export default Projects;
