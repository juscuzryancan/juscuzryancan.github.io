import { Link }  from "react-router-dom";

const Navigation = () => {

  return (
    <nav className="flex gap-8 justify-end p-8">
      <a href="#about">About</a>
      <a href="#skills">Skills</a>
      <a href="#projects">Projects</a>
      <a href="#contacts">Contacts</a>
    </nav>
  );

}

export default Navigation;
