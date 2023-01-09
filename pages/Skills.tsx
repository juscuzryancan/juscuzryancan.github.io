import Head from 'next/head';
import { motion as m } from "framer-motion";


interface SkillProps {
  level: string,
  list: Array<string>
}

const skills = [
  {
    level: "Proficient",
    list: [
      "JavaScript",
      "HTML5",
      "CSS3",
      "Node.js",
      "React",
      "Axios",
      "Express",
      "Git"
    ]
  },
  {
    level: "Knowledgable",
    list: [
      "Java",
      "PostgreSQL"
    ]
  },
  {
    level: "Some Familiarity",
    list: [
      "Python",
      "Bootstrap",
      "Heroku"
    ]
  },
];

const Skill = ({
  level,
  list
}: SkillProps) => {
  return (
    <div className="flex flex-col items-center bg-primary basis-3/4 p-8 rounded-lg flex-grow shadow-sm
      sm:basis-1/3
      dark:bg-secondary">
      <h2 className="text-3xl">{level}</h2>
      {list.map((elem: any, i: number)=> <div key={i}>{elem}</div>)}
    </div>
  );
}

const Skills = () => {

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
        id="skills"
        className="flex flex-col flex-grow
        bg-secondary
        h-screen w-screen
        pt-16 px-4
        dark:bg-primary dark:text-white"
      >
        <h2 className="text-6xl flex justify-center mb-4">Skills</h2>
        <div className="flex flex-col justify-center gap-8
          sm:gap-12 sm:flex-row sm:basis-1/4">
          {skills.map((skill: any, i: number) => <Skill key={i} {...skill}/>)}
        </div>
      </m.div>
      </>
  );
}

export default Skills;