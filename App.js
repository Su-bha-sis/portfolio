import { BrowserRouter } from 'react-router-dom';
import Navbar from "./component/Navbar/Navbar";
import Hero from "./component/Hero/Hero";
import About from "./component/About/About";
import Skills from "./component/skills/skills.jsx";
import Project from "./component/project/project.jsx";
import Contact from "./component/contact/contact.jsx";
import Footer from "./component/Footer/Footer.jsx";

function App() {
  return (
    <>
    
     <Navbar />
      <Hero />
      <About />
      <Skills />
      <Project />
      <Contact />
      <Footer/>
    </>
  );
}
export default App;