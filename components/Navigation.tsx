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
      px-4
      border-spacing-60 
      flex justify-between items-center gap-8
      h-16 w-screen
      border-secondary border-solid rounded
      dark:text-white">
      <h1>juscuzryancan</h1>
      <div className="flex gap-8">
        <Link 
          href="/"
          className={clsx(
          )}
        >About</Link>
        <Link 
          href="/Skills"
        >Skills</Link>
        <Link href="/Projects"
        >Projects</Link>
      <div
        className={clsx(
          "flex border-solid border-tertiary border-2 rounded-full cursor-pointer w-[40px]",
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
