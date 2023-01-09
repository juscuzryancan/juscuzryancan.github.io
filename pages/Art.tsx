import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import Head from 'next/head';
import { motion as m } from "framer-motion";

const Art = () => {

  return (
    <>
      <Head>
        <title>Ryan Riley Puzon</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/ryfav.PNG" />
      </Head>
      <m.div 
        initial={{y: "100%"}}
        animate={{y: "0%"}}
        transition={{duration: 0.75, ease: "easeOut"}}
        exit={{opacity: 1}}
        id="skills"
        className="flex flex-col flex-grow
        bg-secondary
        h-screen w-screen
        pt-16 px-4
        dark:bg-primary dark:text-white"
      >
        Under Construction ...
      </m.div>
      </>
  );
}

export default Art;