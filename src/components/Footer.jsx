import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

const Footer = () => {

	return (
		<footer className="flex flex-col p-8">
      <div>
        {/* <div>Ryan Riley Puzon</div> */}
      </div>
      <div className="snap-center">
        <div className="p-8 snap-center" id="contacts">
          <h2 className="flex justify-center text-3xl mb-4">Contacts</h2>
          <div className="flex justify-center">
            <div className="flex gap-4 justify-between">
              <a 
                href="https://github.com/juscuzryancan" 
                target="_blank" 
                rel="noreferrer"
              >
                <FaGithubSquare className="h-16 w-16"/>
              </a>
              <a 
                className=""
                href="https://www.linkedin.com/in/ryanrileypuzon/" 
                target="_blank" 
                rel="noreferrer"
              >
                <FaLinkedin className="h-16 w-16"/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
	)
}

export default Footer;
