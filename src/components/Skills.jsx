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
}) => {
  return (
    <div className="bg-secondary basis-1/3 p-8 rounded-lg flex-grow">
      <h2 className="text-3xl">{level}</h2>
      {list.map((elem, i)=> <div key={i}>{elem}</div>)}
    </div>
  );
}

const Skills = () => {

  return (
    <div 
      id="skills"
      className="p-8"
    >
      <div className="p-16" id='skills'>
        <h2 className="text-6xl flex justify-center mb-4">Skills</h2>
        <div className="flex justify-center">
          <div className="flex justify-center gap-40">
            {skills.map((skill, i) => <Skill key={i} {...skill}/>)}
          </div>
        </div>
      </div>
    </div>
  );

}

export default Skills;
