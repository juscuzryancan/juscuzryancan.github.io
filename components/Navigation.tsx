import Link from "next/link";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { motion as m } from "framer-motion";
import { useRouter } from "next/router";
import clsx from "clsx";

interface NavigationProps {
  setDarkMode: any;
  darkMode: boolean;
}

const Navigation = ({
  setDarkMode,
  darkMode
}: NavigationProps) => {
  const router = useRouter();

  const toggleDarkMode = () => {
    setDarkMode((darkMode:boolean) => !darkMode) 
  };

  return (
    <nav className="absolute z-10 
      p-4
      flex justify-center items-center gap-8
      h-16 w-screen
      text-lg
      sm:justify-end 
      dark:text-white">
      <div className="flex gap-8">
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
          px-5 py-1
          shadow
          border-primary border-solid border-2 rounded-full 
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
          "flex items-center w-[45px] border-solid border-tertiary border-2 rounded-full cursor-pointer ",
          darkMode ? "bg-indigo-800/90 justify-end" : "bg-yellow-400/90 justify-start"
        )}
        // data-darkmode={darkMode}
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
      </div>
    </nav>
  );

}

export default Navigation;
