import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar>
            <Navbar.Brand>RYAN RILEY PUZON</Navbar.Brand>
            <Link>About</Link>
            <Link>Portfolio</Link>
            <Link>Gallery</Link>
        </Navbar>
    );
};

export default Header;