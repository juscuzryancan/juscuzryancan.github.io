import PFP from "../assets/pfp.jpg";

const Hero = () => {

  return (
    <div 
      className="flex flex-col justify-around items-center bg-secondary gap-8 snap-center m-4 p-4 shadow shadow-primary
      sm:flex-row sm:gap-8 sm:h-full sm:w-auto sm:p-8 sm:m-16"
      id="about"
    >
      <div className="flex flex-col gap-4 max-w-2xl">
        <h1 className="text-4xl ">Ryan Riley Puzon</h1>
        <h2 className="text-2xl ">Software Engineer</h2>
        <div className="text-base">
          I'm a software developer harnessing the world's power for its biggest problems. 
          I'm a recent bootcamp graduate looking to step into the industry. 
          I learned fullstack web development within my bootcamp career where we used React, Express, Node, and PostgreSQL to create web applications.
          As a child, I had many interests within gaming and I found a growing eager to find out how would I be able to create a game myself. From then on, I found myself trailing this thing called programming. Through my educational career, I found a never ending love to logical problems and of course mathematics which helped me fully decide on pursuing computer science. Now, I want to be able to put my skills to the test and satisfy my everlasting need to know more about how systems within the industry work and the small cogs and gears that make them work. In the future, I'd hope to teach everyone else my knowledge and help them within the path of becoming a developer themself.
        </div>
      </div>
      <div>
        <img className="rounded-md sm:max-w-xs" src={PFP} alt="Candid of me in a sketchy parking lot"/> 
        <div className="flex justify-center my-4">
          "I will, therefore I am" - Ryan Riley Puzon
        </div> 
      </div>
      <div className="hidden">
        Swipe Up and Down to explore
      </div>
    </div>
  );
}

export default Hero;
