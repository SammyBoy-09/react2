import React, { useState } from 'react';

function App() {
  // State 1: Tracks the main counter value, starting at 0
  const [counter, setCounter] = useState(0);
  
  // State 2: Tracks the step value for increments/decrements, starting at 1
  const [step, setStep] = useState(1);
  
  // Constant limit to prevent the counter from going negative
  const minValue = 0; 

  // Handler to increase the counter by the current step value
  const handleIncrement = () => {
    setCounter(counter + step);
  };

  // Handler to decrease the counter, ensuring it doesn't drop below 0
  const handleDecrement = () => {
    if (counter - step >= minValue) {
      setCounter(counter - step);
    }
  };

  // Handler to instantly reset the counter back to 0
  const handleReset = () => {
    setCounter(0);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'sans-serif' }}>
      <h1>Counter Application</h1>
      
      {/* Dynamically displays the current counter state */}
      <h2 style={{ fontSize: '48px' }}>{counter}</h2>
      
      {/* Action Buttons mapped to their respective handler functions */}
      <div>
        <button onClick={handleIncrement}>Increase</button>
        <button onClick={handleDecrement} style={{ margin: '0 10px' }}>Decrease</button>
        <button onClick={handleReset}>Reset</button>
      </div>
      
      {/* Input section to dynamically change the step state */}
      <div style={{ marginTop: '30px' }}>
        <label>Set Step Value: </label>
        <input 
          type="number" 
          value={step} 
          // e.target.value is a string by default, so we convert it to a Number
          onChange={(e) => setStep(Number(e.target.value))} 
          min="1" 
        />
      </div>
    </div>
  );
}

export default App;