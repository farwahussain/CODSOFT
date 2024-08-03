import Layout from "./components/Layout/Layout";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Education from "./pages/Education/Education";
import Projects from "./pages/Projects/Projects";
import Techstack from "./pages/Techstack/Techstack";


function App() {
  return (
    <>
      <Layout />
      <div className="container">
      <About />
      <Education />
      <Techstack />
      <Projects />
      <Contact />
      </div>
      <div className="footer mb-3 ms-3">
        <h4 className="text-center">
          Made by Farwa Hussain 
        </h4>
      </div>
    </>
  );
}

export default App;
