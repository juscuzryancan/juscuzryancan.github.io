import PFP from "./IMG_2370.JPG";
import "./styles.css";

const Hero = () => {

    return (
      <section>
        <div className="hero-banner" id="about">
            <img  src={PFP} alt="Candid of me with a nice sunset"/> 
            <div className="hero-banner-text">
                <div className="hero-banner-text-intro">
                    I'm a software developer harnessing the world's power for its biggest problems. 
                    I'm a recent bootcamp graduate looking to step into the industry. 
                    I learned fullstack web development within my bootcamp career where we used React, Express, Node, and PostgreSQL to create web applications.
                    As a child, I had many interests within gaming and I found a growing eager to find out how would I be able to create a game myself. From then on, I found myself trailing this thing called programming. Through my educational career, I found a never ending love to logical problems and of course mathematics which helped me fully decide on pursuing computer science. Now, I want to be able to put my skills to the test and satisfy my everlasting need to know more about how systems within the industry work and the small cogs and gears that make them work. In the future, I'd hope to teach everyone else my knowledge and help them within the path of becoming a developer themself.
                </div>
                <div className="hero-banner-text-intro">"I will therefore, I am" - Ryan Riley Puzon</div>
            </div>
        </div>
      </section>
    )
}

export default Hero;
