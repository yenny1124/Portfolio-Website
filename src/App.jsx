import "./app.scss"
import About from "./components/about/About"
import Contact from "./components/contact/Contact"
import Navbar from "./components/navbar/Navbar"
import Parallax from "./components/parallax/Parallax"
import Projects from "./components/projects/Projects"
import Resume from "./components/resume/Resume"
import YeeunChoi from "./components/yeeunchoi/YeeunChoi"



const App = () => {
  return (
    <div>
      <section id="Home">
        <Navbar />
        <YeeunChoi />
      </section>
      <section id="About">
        <About />
      </section>
      <section id="Resume">
        <Resume />
      </section>
      <section id="Projects">
        <Parallax type="projects" />
      </section>
      <Projects />
      <section id="Contact">
        <Contact />
      </section>
    </div>
  )
}

export default App
