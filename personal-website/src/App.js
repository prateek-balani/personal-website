import logo from './logo.svg';
import './App.css';
import { NavbarComponent } from "./components/NavbarComponent.js" 
import Home from "./components/Home.js"
import 'bootstrap/dist/css/bootstrap.min.css' ;

function App() {
  return (
    <div className="App">
      <NavbarComponent/>
      
      <Home/>
      

      
    </div>
  );
}

export default App;
