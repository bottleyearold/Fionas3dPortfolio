import Hero from "./components/hero/Hero";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Porfolio";
import Contact from "./components/contact/Contact";
import TestShapes from "./components/hero/TestShapes";


const App = () => {
    return (
      <div className='container'>
        <section id = "#home">
            <Hero/>
        </section>
        <section id ="services">
            <Services/>
        </section>
        <section id="portfolio">
            <Portfolio/>
        </section>
        <section id = "contact">
            <Contact/>
        </section>
      </div>
      // <TestShapes/>
    )
  }
  
  export default App