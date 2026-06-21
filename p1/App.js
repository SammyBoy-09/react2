import React, { useState } from 'react';

function App() {
  // Destructuring the state variable and its updater function
  const [text, setText] = useState('');

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Dynamic Text Display</h1>
      
      {/* Input field with an inline onChange handler */}
      <input 
        type="text" 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        placeholder="Type here..." 
      />
      
      {/* Dynamic output */}
      <p>You typed: {text}</p>
    </div>
  );
}

export default App;