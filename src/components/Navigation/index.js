import { Link } from 'react-router-dom';
import './styles.css';

const Navigation = () => {

    return (
        <nav className='navigation'>
            <h1>Ryan Riley Puzon</h1>
            <div className='nav-link-container'>
                <a className='nav-links' href="#about">About</a>
                <a className='nav-links' href="#about">Skills</a>
                <a className='nav-links' href="#about">Projects</a>
                <a className='nav-links' href="#about">Contact Me</a>
            </div>
        </nav>
    );
}

export default Navigation;