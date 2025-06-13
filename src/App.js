import './App.css';
import About from "./Pages/About/About.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Helmet } from 'react-helmet';  
import Header from "./Components/Header/Header.jsx";
import Footer from './Components/Footer/Footer.jsx';
import Home from './Pages/Home/Home.jsx';

function App() {
  return (
    <> 
    <Helmet>
      <title>Esmé O'Brien - Manchester Based Junior Developer</title>
      <meta name="description" content="Esmé O'Brien is a Manchester-based Junior Developer with a passion for front-end development, UI design, and customer engagement. Explore my portfolio to see my work and connect with me." />
    </Helmet>
    <Router>
      <div className="App">
        <Header/>
        <main>     
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        </main>   
        <Footer />
      </div>
    </Router>
    </>
  );
}

export default App;