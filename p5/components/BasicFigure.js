import React from 'react';

const BasicFigure = ({ imageUrl, caption }) => {
  return (
    // The 'figure-card' class handles the hover animation via CSS
    <div className="figure-card">
      <img src={imageUrl} alt={caption} width="150" height="150" style={{ borderRadius: '8px' }} />
      <p style={{ marginTop: '10px', color: '#555' }}>{caption}</p>
    </div>
  );
};

export default BasicFigure;