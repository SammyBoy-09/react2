import React from 'react';

// Using destructuring here to show you know different ways to handle props
function Footer({ tagline, copyright }) { 
  return (
    <footer>
      <p>{tagline}</p>
      <small>{copyright}</small>
    </footer>
  );
}

export default Footer;