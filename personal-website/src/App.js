import logo from './logo.svg';
import './App.css';
import { NavbarComponent } from "./components/NavbarComponent.js" ;
import Home from "./components/Home.js";
import About from "./components/About.js";
import Projects from "./components/Projects.js";
import Framework from "./components/Framework.js"
import 'bootstrap/dist/css/bootstrap.min.css' ;


function App() {
  return (
    <div className="App">
     
      <NavbarComponent/>

      <Home/>

      <About/>
      
      <Projects/>
      
      <Framework/>
      

      </div>
   
  );
}

export default App;
