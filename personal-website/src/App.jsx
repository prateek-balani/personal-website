// import logo from './logo.svg';
import './App.css';
// import { NavbarComponent } from "./components/NavbarComponent.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Framework from "./components/Framework.jsx"
import GlitchEffect from './components/GlitchEffect.jsx';
import ContactMe from './components/ContactMe.jsx';
import Footer from './components/Footer.jsx';
import WorkExperience from './components/WorkExperience.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>

      <div className="App" style={{ position: 'relative' }}>
        <GlitchEffect >




          <Home />
          </GlitchEffect>
          <About />

          <WorkExperience />

          <Framework />

          <Projects />

          <ContactMe />
          <div>
            <Footer />
          </div>



        </div>







 




    </>

  );
}

export default App;
