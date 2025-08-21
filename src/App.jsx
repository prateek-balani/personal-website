



import '98.css';
import Base from './components/Base';
import HomePage from './components/HomePage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css';


function App() {
  return (
    // Use basename so BrowserRouter trims the GitHub Pages repo subpath (/personal-website/)
    <Router basename={import.meta.env.BASE_URL}>
      <>
        <Routes>
          <Route path='/' element={<HomePage/>}/>

        </Routes>

















      </>
    </Router>

  );
}

export default App;
