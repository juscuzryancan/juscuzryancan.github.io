import Link from "next/link";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { motion as m } from "framer-motion";

interface NavigationProps {
  setDarkMode: any;
  darkMode: boolean;
}

const Navigation = ({
  setDarkMode,
  darkMode
}: NavigationProps) => {

  const toggleDarkMode = () => {
    setDarkMode((darkMode:boolean) => !darkMode) 
  };

  return (
    <nav className="flex flex-col bg-red-400 gap-8 px-8 justify-center items-center h-screen border-secondary border-solid rounded">
      <Link 
        className="bg-primary"
        href="/">About</Link>
      <Link href="/Skills">Skills</Link>
      <Link href="/Projects">Projects</Link>
      <div
        className={`switch flex border-solid border-tertiary border-2 rounded-full cursor-pointer w-[40px] justify-start ${darkMode ? "" : "bg-[FBCEB1]"}`}
        data-darkMode={darkMode}
        onClick={toggleDarkMode}
      >
        <m.div 
          className="border-tertiary border-solid"
          layout 
          transition={{
            type: "spring",
            stiffness: 800,
            damping: 30
          }}
        >
          <BsFillMoonStarsFill className="m-1"/>
        </m.div>
      </div>
    </nav>
  );

}

export default Navigation;
