import React from 'react';
import FigureList from './components/FigureList';
import './App.css'; // Importing the CSS file here applies it globally

const App = () => {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Dynamic Image Gallery</h1>
      <FigureList />
    </div>
  );
};

export default App;