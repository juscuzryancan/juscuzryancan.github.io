import { useState, useEffect } from "react";
import Head from 'next/head'
import PFP from "../public/pfp.jpg";
import Image from "next/image";
import { motion as m } from "framer-motion";

interface HomeProps {
  darkMode: boolean;
}

const Home = ({darkMode}: HomeProps) => {

  const [flip, setFlip] = useState(true);

  useEffect(()=> {
    const interval = setInterval(() => {
      setFlip(!flip);
    }, 5000);
    return () => clearInterval(interval);
  }, [])

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="title" content="Ryan Riley Puzon" />
        <meta name="description" content="Software Engineer Personal Portfolio" />

        {/*<!-- Open Graph / Facebook -->*/}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://juscuzryancan.github.io/" /> 
        <meta property="og:title" content="Ryan Riley Puzon" />
        <meta property="og:description" content="Software Engineer Personal Portfolio" />
        <meta property="og:image" content="https://juscuzryancan.github.io/_next/static/media/pfp.6427a436.jpg" />

        {/*<!-- Twitter -->*/}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://juscuzryancan.github.io/" />
        <meta property="twitter:title" content="Ryan Riley Puzon" />
        <meta property="twitter:description" content="Software Engineer Personal Portfolio" />
        <meta property="twitter:image" content="https://juscuzryancan.github.io/_next/static/media/pfp.6427a436.jpg" />
        <link rel="icon" href="/ryfav.PNG" />
      </Head>
      <m.main
        initial={{y: "100%"}}
        animate={{y: "0%"}}
        transition={{duration: 0.75, ease: "easeOut"}}
        exit={{opacity: 1}}
        className="absolute top-0 left-0 flex flex-col flex-grow h-screen w-screen"
      >
        <div 
          className="flex flex-grow flex-col justify-center items-center gap-8
          shadow shadow-primary
          bg-secondary
          pt-16
          sm:flex-row sm:gap-32 sm:w-auto sm:p-8 sm:m-0
          dark:bg-primary dark:text-white"
          id="about"
        >
          <div className="flex flex-col gap-4 max-w-2xl">
            <h1 
              className="text-4xl flex justify-center
              sm:block"
            >Ryan Riley Puzon</h1>
            <h2 className="text-2xl flex justify-center
              sm:block"
            >Software Engineer</h2>
            <div className="text-lg p-4
              sm:text-base sm:p-0">
              I'm a software engineer harnessing the world's power for its biggest problems.
              I learned fullstack web development within my bootcamp career where we used React, Express, Node, and PostgreSQL to create web applications. 
              I have worked as a Software Engineer at Zaghop LLC to create a CRM application with React, Node, and AWS
              As a child, I had many interests within gaming and I found a growing eager to find out how would I be able to create a game myself. 
              From then on, I found myself trailing this thing called programming. 
              Through my educational career, I found a never ending love to logical problems and of course mathematics which helped me fully decide on pursuing computer science. 
              Now, I want to be able to put my skills to the test and satisfy my everlasting need to know more about how systems within the industry work and the small cogs and gears that make them work. 
              In the future, I'd hope to teach everyone else my knowledge and help them within the path of becoming a developer themself.
            </div>
          </div>
          <div>
            <Image 
              className="rounded-xl p-4
              sm:max-w-xs sm:p-0" 
              src={PFP} 
              alt="Candid of me in a sketchy parking lot"
            /> 
            <div className="flex justify-center my-4">
              "I will, therefore I am" - Ryan Riley Puzon
            </div> 
          </div>
          <div className="hidden">
            Swipe Up and Down to explore
          </div>
        </div>
      </m.main>
      </>
  )
}

export default Home;
