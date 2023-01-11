import Link from "next/link";
import { useState } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { motion as m } from "framer-motion";
import clsx from "clsx";

interface NavigationProps {
  setDarkMode: any;
  darkMode: boolean;
}

const Menu = ({darkMode, toggleDarkMode} : any) => {

  return (
    <>
      <Link 
        href="/"
        className="bg-primary 
        px-2 py-1
        shadow
        border-primary border-solid border-2 rounded-full 
        dark:bg-secondary dark:shadow-white"
      >About</Link>
      <Link 
        className="bg-primary 
        px-2 py-1
        shadow
        border-primary border-solid border-2 rounded-full 
        dark:bg-secondary dark:shadow-white"
        href="/Skills"
      >Skills</Link>
      <Link 
        className="bg-primary 
        px-2 py-1
        shadow
        border-primary border-solid border-2 rounded-full 
        dark:bg-secondary dark:shadow-white"
        href="/Projects"
      >Projects</Link>
      <Link 
        className="bg-primary 
        px-2 py-1 text-left
        shadow
        border-primary border-solid border-2 rounded-full 
        sm:px-5
        dark:bg-secondary dark:shadow-white"
        href="/Art"
      >Art</Link>
      <Link 
        className="bg-primary 
        px-2 py-1
        shadow
        border-primary border-solid border-2 rounded-full 
        dark:bg-secondary dark:shadow-white"
        href="/Contacts"
      >Contact Me</Link>
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
      </>
  )
}

const Navigation = ({
  setDarkMode,
  darkMode
}: NavigationProps) => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((darkMode:boolean) => !darkMode) 
  };

  return (
    <nav className="absolute z-10 
      p-4
      flex justify-end items-center gap-8
      h-16 w-screen
      text-lg
      dark:text-white">
      <div className="hidden 
        sm:flex sm:gap-8">
        <Menu darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      </div>
      <div className="sm:hidden">
        {toggleMenu ? (
          <RiCloseLine
            color={darkMode ? "#fff" : "#000"}
            size={27}
            onClick={() => setToggleMenu(false)}
            />
        ) : (
          <RiMenu3Line
            color={darkMode ? "#fff" : "#000"}
            size={27}
            onClick={() => setToggleMenu(true)}
            />
        )}
      </div>
      {toggleMenu &&
        <div className="absolute p-4 bg-secondary rounded-md shadow-lg z-20 top-4 right-12 flex flex-col gap-4
          dark:bg-primary dark:shadow-white">
          <Menu />
        </div>
      }
    </nav>
  );

}

export default Navigation;
