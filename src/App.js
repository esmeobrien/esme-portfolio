import './App.css';
import About from "./Pages/About/About.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./Components/Header/Header.jsx";
import Footer from './Components/Footer/Footer.jsx';
import Home from './Pages/Home/Home.jsx';

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
    
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;