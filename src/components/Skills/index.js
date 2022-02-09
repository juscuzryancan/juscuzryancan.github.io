import './styles.css';

const Skills = () => {

    return (
        <div className='skills'>
            <h2>Skills</h2>
            <div className='skills-lists-container'>
                <ul>
                    <h3>Proficient</h3>
                    <li>JavaScript</li>
                    <li>HTML5</li> 
                    <li>CSS3</li> 
                    <li>Node.js</li>
                    <li>React</li>
                    <li>Axios</li>
                    <li>Express</li>
                    <li>Git</li>
                </ul>
                <ul>
                    <h3>Knowledgable</h3> 
                    <li>Java</li>
                    <li>PostgresQL</li>
                </ul>
                <ul>
                    <h3>Some Familiarity</h3> 
                    <li>Python</li>
                    <li>Bootstrap</li>
                    <li>Heroku</li>
                </ul>
            </div>
        </div>
    );

}

export default Skills;