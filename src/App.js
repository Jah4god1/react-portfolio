import React from 'react';
// import Switch  from 'react-switch';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navigation'
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Navigation';


function App() {
    return (
    <Router>
    <div className="bg-gray-100 min-h-screen">
    <Navbar />
    
    <div className="container mx-auto px-4 py-8">
    <Routes>
    <Route path="/Home" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/portfolio" element={<Portfolio />} />
    <Route path="/contact" element={<Contact />} />
    </Routes>
    </div>
    </div>
    </Router>
    );
    }

export default App;
