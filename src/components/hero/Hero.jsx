import "./Hero.css"
import Speech from "./Speech" 

const Hero = () => {
    return <div className='hero'>
        <div className="hSection left">
            <h1 className="hTitle">
                Hey There,
                <br />
                <span>I'm Fiona!</span>
            </h1>
            <div className="awards">
                <h2>Top Rated Designer</h2>
                <p> EHJBEXH chdjbchfb fhvjfvhf hrfbjhvcf djhcd</p>
                <div className="awardList">
                    <img src="/award1.png" alt=""/>
                    <img src="/award1.png" alt=""/>
                    <img src="/award1.png" alt=""/>
                </div>
            </div>
        </div>

        <div className="hSection right">
            <div className="follow">
                <a href="/">
                    <img src="" alt="" />
                </a>
                <a href="/">
                    <img src="" alt="" />
                </a>
                <a href="/">
                    <img src="" alt="" />
                </a>
            </div>
            <Speech/>

            <a href="/#contact" className="contactLink">
                <div className="contactButton">
                    
                </div>
            </a>
        </div>
    </div>
    
}

export default Hero