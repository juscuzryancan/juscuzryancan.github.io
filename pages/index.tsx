import { useState, useEffect } from "react";
import Head from 'next/head'
import PFP from "../public/pfp.jpg";
import Image from "next/image";
import { delay, motion as m } from "framer-motion";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

const Home = () => {

  const [darkMode, setDarkMode] = useState(false);
  const [flip, setFlip] = useState(true);

  useEffect(()=> {
    const interval = setInterval(() => {
      setFlip(!flip);
    }, 5000);
    return () => clearInterval(interval);
  }, [])

  return (
    <div className={darkMode ? "dark" : ""}>
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
      <main className="bg-white px-10 
        md:px-20 
        lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-redHatDisplay">juscuzryancan</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill className="cursor-pointer text-2xl"/>
              </li>
              <li>
                <a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8" href="#">Resume</a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium
              md:text-6xl">Ryan Riley Puzon</h2>
            <h3 className="text-2xl py-2
              md:text-3xl">Software Engineer</h3>
            <p className="text-md py-5 mx-auto max-w-xl
              md:text-xl">
              I'm a software engineer harnessing the world's power for its biggest problems.
              I learned fullstack web development within my bootcamp career where we used React, Express, Node, and PostgreSQL to create web applications. 
              I have worked as a Software Engineer at Zaghop LLC to create a CRM application with React, Node, and AWS
              As a child, I had many interests within gaming and I found a growing eager to find out how would I be able to create a game myself. 
              From then on, I found myself trailing this thing called programming. 
              Through my educational career, I found a never ending love to logical problems and of course mathematics which helped me fully decide on pursuing computer science. 
              Now, I want to be able to put my skills to the test and satisfy my everlasting need to know more about how systems within the industry work and the small cogs and gears that make them work. 
              In the future, I'd hope to teach everyone else my knowledge and help them within the path of becoming a developer themself.
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <AiFillGithub />
            <AiFillLinkedin />
          </div>
          <div className="relative mx-auto rounded-full w-80 h-80 overflow-hidden
            md:h-96 md:w-96">
            <Image 
              src={PFP}
              alt="me"
            />
          </div>
        </section>

        <section>
          <div>
            <h3 className="text-3xl py-1">Services I offer</h3>
            <p className="text-md py-2 leading-8 text-gray-800">
              since the beingnginasdf ijopqweirj, qwer jpoijqwpeorij qwer,,qwerpoi jqwoperij qopweirj, weqr 
              ajas;dfkj;lkdfjl;kjwer;lkjqwelk;rj;qlkwejrl;kqwjerlk j
            </p>
            <p className="text-md py-2 leading-8 text-gray-800">
              since the beingnginasdf ijopqweirj, qwer jpoijqwpeorij qwer,,qwerpoi jqwoperij qopweirj, weqr 
              ajas;dfkj;lkdfjl;kjwer;lkjqwelk;rj;qlkwejrl;kqwjerlk j
            </p>
          </div>
          <div className="lg:flex">
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              {/* <Image alt="hello" src={}/> */}
              <h3 className="text-lg font-medium pt-8 pb-2">beautiful designs</h3>
              <p className="py-2">insane digintin with theory f ofr  your need design theory.</p>
              <h4 className="py-4 text-teal-600">Desig tools i u se</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">illustrator</p>
              <p className="text-gray-800 py-1">figma</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              {/* <Image alt="hello" src={}/> */}
              <h3 className="text-lg font-medium pt-8 pb-2">beautiful designs</h3>
              <p className="py-2">insane digintin with theory f ofr  your need design theory.</p>
              <h4 className="py-4 text-teal-600">Desig tools i u se</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">illustrator</p>
              <p className="text-gray-800 py-1">figma</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              {/* <Image alt="hello" src={}/> */}
              <h3 className="text-lg font-medium pt-8 pb-2">beautiful designs</h3>
              <p className="py-2">insane digintin with theory f ofr  your need design theory.</p>
              <h4 className="py-4 text-teal-600">Desig tools i u se</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">illustrator</p>
              <p className="text-gray-800 py-1">figma</p>
            </div>
          </div>
        </section>

        <section>
          <div>
            <h3 className="text-3xl py-1">Portfolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800">
              since the beingnginasdf ijopqweirj, qwer jpoijqwpeorij qwer,,qwerpoi jqwoperij qopweirj, weqr 
              ajas;dfkj;lkdfjl;kjwer;lkjqwelk;rj;qlkwejrl;kqwjerlk j
            </p>
            <p className="text-md py-2 leading-8 text-gray-800">
              since the beingnginasdf ijopqweirj, qwer jpoijqwpeorij qwer,,qwerpoi jqwoperij qopweirj, weqr 
              ajas;dfkj;lkdfjl;kjwer;lkjqwelk;rj;qlkwejrl;kqwjerlk j
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10
            lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1">
              {/* <Image 
                    className="rounded-lg object-cover" 
                    width={"100%"} 
                    height={"100%"} 
                    layout="responsive"
                  /> */}
            </div>
          </div>
        </section>
      </main>     
    </div>
  )
}

      // <m.main
      //   initial={{y: "100%"}}
      //   animate={{y: "0%"}}
      //   transition={{duration: 0.75, ease: "easeOut"}}
      //   exit={{opacity: 1}}
      //   className="absolute top-0 left-0 flex flex-col flex-grow h-screen w-screen"
      // >
      //   <div 
      //     className="flex flex-grow flex-col justify-center items-center gap-16
      //     shadow shadow-primary
      //     bg-secondary
      //     pt-20
      //     sm:w-auto sm:px-8
      //     md:flex-row
      //     dark:bg-primary dark:text-white"
      //     id="about"
      //   >
      //     <m.div 
      //       transition={{delay: 0.5, duration: .75, ease: "easeOut"}}
      //       initial={{x:"100%", opacity: 0}}
      //       animate={{x:"0%", opacity: 1}}
      //       className="flex flex-col gap-4 max-w-2xl">
      //       <h1 
      //         className="text-4xl flex justify-center
      //         sm:block"
      //       >Ryan Riley Puzon</h1>
      //       <h2 className="text-2xl flex justify-center
      //         sm:block"
      //       >Software Engineer</h2>
      //       <div className="text-lg p-4
      //         sm:text-base sm:p-0">
      //         I'm a software engineer harnessing the world's power for its biggest problems.
      //         I learned fullstack web development within my bootcamp career where we used React, Express, Node, and PostgreSQL to create web applications. 
      //         I have worked as a Software Engineer at Zaghop LLC to create a CRM application with React, Node, and AWS
      //         As a child, I had many interests within gaming and I found a growing eager to find out how would I be able to create a game myself. 
      //         From then on, I found myself trailing this thing called programming. 
      //         Through my educational career, I found a never ending love to logical problems and of course mathematics which helped me fully decide on pursuing computer science. 
      //         Now, I want to be able to put my skills to the test and satisfy my everlasting need to know more about how systems within the industry work and the small cogs and gears that make them work. 
      //         In the future, I'd hope to teach everyone else my knowledge and help them within the path of becoming a developer themself.
      //       </div>
      //     </m.div>
      //     <div>
      //       <Image 
      //         priority
      //         className="rounded-xl p-4
      //         sm:max-w-xs sm:p-0" 
      //         src={PFP} 
      //         alt="Candid of me in a sketchy parking lot"
      //       /> 
      //       <div className="flex justify-center my-4">
      //         "I will, therefore I am" - Ryan Riley Puzon
      //       </div> 
      //     </div>
      //     <div className="hidden">
      //       Swipe Up and Down to explore
      //     </div>
      //   </div>
      // </m.main>
export default Home;
