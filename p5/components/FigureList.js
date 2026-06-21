import React, { useState } from 'react';
import BasicFigure from './BasicFigure';

const FigureList = () => {
  // Initial state with 2 default images
  const [figures, setFigures] = useState([
    { imageUrl: 'https://picsum.photos/200?random=1', caption: 'Image 1' },
    { imageUrl: 'https://picsum.photos/200?random=2', caption: 'Image 2' }
  ]);

  const addFigure = () => {
    const newId = figures.length + 1;
    // Spread existing figures, then append the new object
    setFigures([...figures, { 
      imageUrl: `https://picsum.photos/200?random=${newId}`, 
      caption: `Image ${newId}` 
    }]);
  };

  const removeFigure = () => {
    // .slice(0, -1) returns a new array minus the very last item
    setFigures(figures.slice(0, -1));
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <button onClick={addFigure} style={{ padding: '8px', cursor: 'pointer' }}>Add Image</button>
      <button onClick={removeFigure} style={{ padding: '8px', cursor: 'pointer', marginLeft: '10px' }}>Remove Image</button>
      
      {/* The gallery container */}
      <div className="gallery-layout">
        {figures.map((fig, index) => (
          <BasicFigure key={index} imageUrl={fig.imageUrl} caption={fig.caption} />
        ))}
      </div>
    </div>
  );
};

export default FigureList;