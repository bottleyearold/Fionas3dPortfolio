import "./Hero.css";
import fionaImage from '../../assets/fiona.png';
import insta from '../../assets/instagram.png';
import git from '../../assets/github.png';
import linkdln from '../../assets/linkdln.png';
import Speech from "./Speech"; 
import TestShapes from "./TestShapes"; 
import Shape from "./Shape"; 

const Hero = () => {
    return  (
    <section className="hero">
        <div className="hSection left">
            <h1 className="hTitle">
                Hi,
                <br />
                <span>I'm Fiona!</span>
            </h1>
            <div className="socials">
                <h2>Software Developer  + Student </h2>
                <p>A passion for software development and data science</p>
                <div className="socialsList">
                    <img src={linkdln} alt="linkdln logo"/>
                    <img src={insta} alt="Instagram Logo"/>
                    <img src={git} alt="Github Logo"/>
                </div>
            </div>
        </div>

        <div className="hSection right">
            <a href="/#contact" className="contactLink">
                <div className="contactButton">
                    <svg viewBox= "0 0 200 200" width = "150" height = "150">
                        <circle cx="100" cy="100" r="90" fill="white"/>
                        <path
                            id="innerCirclePath"
                            fill = "none"
                            d = "M 100,100 m -60,0 a 60,60 0 1,1 120,0 a 60, 60 0 1,1 -120,0"
                        />
                        <text className="circleText">
                            <textPath href="#innerCirclePath">Hire Now</textPath>
                        </text>
                        <text className="circleText">
                            <textPath href="#innerCirclePath" startOffset="44%">Contact Me</textPath>
                        </text>
                    </svg>
                    <div className="finger-icon">

                    </div>
                </div>
            </a>
            <div className="shape-bg">
                <TestShapes />
            </div>
            <div className="faceName">
                <div className="fiona-image">
                    <a href="/">
                        <img src={fionaImage} alt="Fionas Image" width={580} />
                    </a>
                </div>
                <Speech/>
            </div>
        </div>
    </section>
  );
    
}

export default Hero