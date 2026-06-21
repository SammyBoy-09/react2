import React from 'react';
// Rename BrowserRouter to Router for cleaner code
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Home, About, Contact } from './components/Pages';

const App = () => {
  return (
    <Router>
      <Navbar />
      
      {/* The container where the page content will render */}
      <div style={{ padding: '20px', textAlign: 'center', fontFamily: 'sans-serif' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;