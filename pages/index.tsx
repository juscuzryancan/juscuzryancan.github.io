import { useState, useEffect } from "react";
import Head from 'next/head'
import PFP from "../public/pfp.jpg";
import Image from "next/image";
import { delay, motion as m } from "framer-motion";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import clsx from "clsx"
import { 
  SiJavascript, 
  SiTypescript, 
  SiJava, 
  SiPython, 
  SiReact, 
  SiTailwindcss, 
  SiHtml5, 
  SiCss3, 
  SiNodedotjs, 
  SiExpress, 
  SiPostgresql, 
  SiGit,
  SiHeroku,
  SiAmazonaws,
  SiPostman
} from "react-icons/si";
import minesweeper from "../public/minesweeper.png";
import strangersThings from "../public/strangers_things.png";
import fitnessTracker from "../public/fitness_tracker.png";
import virtualTraders from "../public/virtual_traders.png";


const projects = [
  {
    title: "Virtual Traders",
    link: "https://virtual-trader-44d67a97b643.herokuapp.com/",
    description: "Fullstack Ecommerce Website For Selling Trading Cards",
    img: virtualTraders
  },
  {
    title: "Fitness Trackr",
    link: "https://lit-tor-21021-b8c9417056cb.herokuapp.com/",
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

const languages = [
  {name: "JavaScript", icon: <SiJavascript />}, 
  {name: "TypeScript", icon: <SiTypescript />},
  {name: "Java", icon: <SiJava />},
  {name: "Python", icon: <SiPython />}, 
];

const frontend = [
  {name: "HTML5", icon: <SiHtml5 />}, 
  {name: "CSS3", icon: <SiCss3 />}, 
  {name: "React", icon: <SiReact />}, 
  {name: "Tailwind", icon: <SiTailwindcss />}, 
];

const backend = [
  {name: "Node.js", icon: <SiNodedotjs />}, 
  {name: "Express", icon: <SiExpress />}, 
  {name: "PostgreSQL", icon: <SiPostgresql />},
];

const tools_libraries = [
  {name: "Git", icon: <SiGit/>}, 
  {name: "Heroku", icon: <SiHeroku/>}, 
  {name: "AWS", icon: <SiAmazonaws/>}, 
  {name: "Postman", icon: <SiPostman/>}
];

const skills: any = {
  "Languages": languages,
  "Frontend": frontend,
  "Backend": backend,
  "Tools and Libraries": tools_libraries
}


const Home = () => {

  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((darkMode:boolean) => !darkMode) 
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Ryan Riley Puzon</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="title" content="Ryan Riley Puzon" />
        <meta name="description" content="Software Engineer Personal Portfolio" />

        {/*<!-- Open Graph / Facebook -->*/}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://juscuzryancan.github.io/" /> 
        <meta property="og:title" content="Ryan Riley Puzon" />
        <meta property="og:description" content="Software Engineer Personal Portfolio" />
        <meta property="og:image" content="https://juscuzryancan.github.io/_next/static/media/pfp.6427a436.jpg" />

        {/*<!-- Twitter -->*/}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://juscuzryancan.github.io/" />
        <meta property="twitter:title" content="Ryan Riley Puzon" />
        <meta property="twitter:description" content="Software Engineer Personal Portfolio" />
        <meta property="twitter:image" content="https://juscuzryancan.github.io/_next/static/media/pfp.6427a436.jpg" />
        <link rel="icon" href="/ryfav.PNG" />
      </Head>
      <main className={clsx(darkMode && "dark",
        "bg-white px-10",
        "md:px-20",
        "lg:px-40",
        "dark:bg-primary dark:text-white")}>
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-redHatDisplay">juscuzryancan</h1>
            <ul className="flex items-center">
              <li>
                <div
                  className={clsx(
                    "hidden sm:flex items-center w-[45px] border-solid border-tertiary border-2 rounded-full cursor-pointer ",
                    darkMode ? "bg-indigo-800/90 justify-end" : "bg-yellow-400/90 justify-start"
                  )}
                  onClick={toggleDarkMode}
                >
                  <m.div 
                    className="border-tertiary border-solid"
                    layout 
                    transition={{
                      type: "spring",
                      stiffness: 900,
                      damping: 30
                    }}
                  >
                    <BsFillMoonStarsFill className="mx-1 my-1"/>
                  </m.div>
                </div>
              </li>
              <li>
                <a 
                  className="bg-gradient-to-r from-secondary to-tertiary text-white px-4 py-2 rounded-md ml-8" 
                  href="https://editor.p5js.org/rpuzon01/sketches/OJ4lsZGjo"
                  target="_blank"
                  rel="noreferrer"
                >Click Me!</a>
              </li>
            </ul>
          </nav>
          <m.div 
            transition={{duration: 1, ease: "easeInOut"}}
            initial={{x:"100%", opacity: 0}}
            animate={{x:"0%", opacity: 1}}
            className="text-center p-10"
          >
            <h2 className="text-5xl py-2 text-tertiary font-medium
              md:text-6xl
              dark:text-four">Ryan Riley Puzon</h2>
            <h3 className="text-2xl py-2
              md:text-3xl">Software Engineer</h3>
            <p className="text-md py-5 mx-auto max-w-xl
              md:text-xl">
              I'm a software engineer harnessing the world's power for its biggest problems.
              I learned fullstack web development within my bootcamp career where we used React, Express, Node, and PostgreSQL to create web applications. 
              I have worked as a Software Engineer at Zaghop LLC to create a CRM application with React, Node, and AWS.
              As a child, I had many interests within gaming and I found a growing eager to find out how would I be able to create a game myself. 
              From then on, I found myself trailing this thing called programming. 
              Through my educational career, I found a never ending love to logical problems and of course mathematics which helped me fully decide on pursuing computer science. 
              Now, I want to be able to put my skills to the test and satisfy my everlasting need to know more about how systems within the industry work and the small cogs and gears that make them work. 
              In the future, I'd hope to teach everyone else my knowledge and help them within the path of becoming a developer themself.
            </p>
          </m.div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-black dark:text-white">
            <a 
              href="https://github.com/juscuzryancan" 
              target="_blank" 
              rel="noreferrer"
            >
              <AiFillGithub />
            </a>
            <a 
              className=""
              href="https://www.linkedin.com/in/ryanrileypuzon/" 
              target="_blank" 
              rel="noreferrer"
            >
              <AiFillLinkedin />
            </a>
          </div>
          <div className="relative mx-auto rounded-full w-80 h-80 overflow-hidden my-8
            md:h-96 md:w-96">
            <Image 
              src={PFP}
              alt="me"
            />
          </div>
        </section>

        <section>
          <div>
            <h3 className="text-3xl py-1">Skills</h3>
            {/* <p className="text-md py-2 leading-8 text-gray-800"> */}
            {/*   since the beingnginasdf ijopqweirj, qwer jpoijqwpeorij qwer,,qwerpoi jqwoperij qopweirj, weqr  */}
            {/*   ajas;dfkj;lkdfjl;kjwer;lkjqwelk;rj;qlkwejrl;kqwjerlk j */}
            {/* </p> */}
            {/* <p className="text-md py-2 leading-8 text-gray-800"> */}
            {/*   since the beingnginasdf ijopqweirj, qwer jpoijqwpeorij qwer,,qwerpoi jqwoperij qopweirj, weqr  */}
            {/*   ajas;dfkj;lkdfjl;kjwer;lkjqwelk;rj;qlkwejrl;kqwjerlk j */}
            {/* </p> */}
          </div>
          <div className="lg:flex gap-2">
            {Object.keys(skills).map((key: string, i: number) => {
              return (
                <div key={i} className="flex flex-col flex-1 items-center shadow-lg p-10 rounded-xl my-10">
                  {/* <Image alt="hello" src={}/> */}
                  <h3 className="text-lg text-tertiary font-medium pt-8 pb-2 dark:text-four">{key}</h3>
                  {/* <p className="py-2">insane digintin with theory f ofr  your need design theory.</p> */}
                  {/* <h4 className="py-4 text-teal-600">Desig tools i u se</h4> */}
                  {skills[key].map((skill: any, i: number) => {
                    return (
                      <div key={i} className="flex gap-2 items-center">
                        <p className="text-gray-800 py-1 dark:text-white">{skill.name}</p>
                        <p className="text-gray-800 py-1 dark:text-white">{skill.icon}</p>
                      </div>
                    )
                  })}
                </div>
              );
            })}
          </div>
        </section>

        <section>
          <div>
            <h3 className="text-3xl py-1">Projects</h3>
            {/* <p className="text-md py-2 leading-8 text-gray-800 dark:text-white"> */}
            {/*   since the beingnginasdf ijopqweirj, qwer jpoijqwpeorij qwer,,qwerpoi jqwoperij qopweirj, weqr  */}
            {/*   ajas;dfkj;lkdfjl;kjwer;lkjqwelk;rj;qlkwejrl;kqwjerlk j */}
            {/* </p> */}
            {/* <p className="text-md py-2 leading-8 text-gray-800 dark:text-white"> */}
            {/*   since the beingnginasdf ijopqweirj, qwer jpoijqwpeorij qwer,,qwerpoi jqwoperij qopweirj, weqr  */}
            {/*   ajas;dfkj;lkdfjl;kjwer;lkjqwelk;rj;qlkwejrl;kqwjerlk j */}
            {/* </p> */}
          </div>
          <div className="flex flex-col gap-10 py-10
            lg:flex-row lg:flex-wrap">

            {projects.map(({link, title, description, img}: any, i: number) => {
              return <div key={i} className="relative group basis-1/3 flex-1 flex flex-wrap flex-col shadow-sm shadow-tertiary bg-primary text-slate-50
                rounded-md
                sm:basis-1/5 sm:h-[350px]"
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
            })}

            <div className="basis-1/3 flex-1">
              {/* <Image 
                    className="rounded-lg object-cover" 
                    width={"100%"} 
                    height={"100%"} 
                    layout="responsive"
                  /> */}
            </div>
          </div>
        </section>
      </main>     
      </div>
  )
}

      // <m.main
      //   initial={{y: "100%"}}
      //   animate={{y: "0%"}}
      //   transition={{duration: 0.75, ease: "easeOut"}}
      //   exit={{opacity: 1}}
      //   className="absolute top-0 left-0 flex flex-col flex-grow h-screen w-screen"
      // >
      //   <div 
      //     className="flex flex-grow flex-col justify-center items-center gap-16
      //     shadow shadow-primary
      //     bg-secondary
      //     pt-20
      //     sm:w-auto sm:px-8
      //     md:flex-row
      //     dark:bg-primary dark:text-white"
      //     id="about"
      //   >
      //     <m.div 
      //       transition={{delay: 0.5, duration: .75, ease: "easeOut"}}
      //       initial={{x:"100%", opacity: 0}}
      //       animate={{x:"0%", opacity: 1}}
      //       className="flex flex-col gap-4 max-w-2xl">
      //       <h1 
      //         className="text-4xl flex justify-center
      //         sm:block"
      //       >Ryan Riley Puzon</h1>
      //       <h2 className="text-2xl flex justify-center
      //         sm:block"
      //       >Software Engineer</h2>
      //       <div className="text-lg p-4
      //         sm:text-base sm:p-0">
      //         I'm a software engineer harnessing the world's power for its biggest problems.
      //         I learned fullstack web development within my bootcamp career where we used React, Express, Node, and PostgreSQL to create web applications. 
      //         I have worked as a Software Engineer at Zaghop LLC to create a CRM application with React, Node, and AWS
      //         As a child, I had many interests within gaming and I found a growing eager to find out how would I be able to create a game myself. 
      //         From then on, I found myself trailing this thing called programming. 
      //         Through my educational career, I found a never ending love to logical problems and of course mathematics which helped me fully decide on pursuing computer science. 
      //         Now, I want to be able to put my skills to the test and satisfy my everlasting need to know more about how systems within the industry work and the small cogs and gears that make them work. 
      //         In the future, I'd hope to teach everyone else my knowledge and help them within the path of becoming a developer themself.
      //       </div>
      //     </m.div>
      //     <div>
      //       <Image 
      //         priority
      //         className="rounded-xl p-4
      //         sm:max-w-xs sm:p-0" 
      //         src={PFP} 
      //         alt="Candid of me in a sketchy parking lot"
      //       /> 
      //       <div className="flex justify-center my-4">
      //         "I will, therefore I am" - Ryan Riley Puzon
      //       </div> 
      //     </div>
      //     <div className="hidden">
      //       Swipe Up and Down to explore
      //     </div>
      //   </div>
      // </m.main>
export default Home;
