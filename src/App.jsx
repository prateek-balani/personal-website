



import '98.css';
import Base from './components/Base';
import HomePage from './components/HomePage';
import Recruiters from './components/Recruiters';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css';
import Navbar from './components/Navbar';



function App() {
  return (
    // Use basename so BrowserRouter trims the GitHub Pages repo subpath (/personal-website/)
    <Router basename={import.meta.env.BASE_URL}>
      <Navbar />

      <>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/recruiters' element={<Recruiters/>}/>

        </Routes>

      </>
    </Router>

  );
}

export default App;
