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
}: any) => {
  return (
    <div className="flex flex-col items-center bg-secondary basis-3/4 p-8 rounded-lg flex-grow shadow-sm
      sm:basis-1/3">
      <h2 className="text-3xl">{level}</h2>
      {list.map((elem: any, i: number)=> <div key={i}>{elem}</div>)}
    </div>
  );
}

const Skills = () => {

  return (
    <div 
      id="skills"
      className="p-4
      sm:p-16"
    >
      <h2 className="text-6xl flex justify-center mb-4">Skills</h2>
      <div className="flex flex-col justify-center gap-8
        sm:gap-12 sm:flex-row sm:basis-1/4">
        {skills.map((skill: any, i: number) => <Skill key={i} {...skill}/>)}
      </div>
    </div>
  );

}

export default Skills;
