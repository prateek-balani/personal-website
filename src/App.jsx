



import '98.css';
import Base from './components/Base';
import HomePage from './components/HomePage';
import Recruiters from './components/Recruiters';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css';
import Navbar from './components/Navbar';
import Developers from './components/Developers';
import Contact from './components/Contact';



function App() {
  return (
    // Use basename so BrowserRouter trims the GitHub Pages repo subpath (/personal-website/) basename={import.meta.env.BASE_URL}
    <Router  basename="/personal-website" >
      <Navbar />

      <>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/recruiters' element={<Recruiters/>}/>
          <Route path='/developers' element={<Developers/>}/>
          <Route path='/contact' element={<Contact/>}/>

        </Routes>

      </>
    </Router>

  );
}

export default App;
