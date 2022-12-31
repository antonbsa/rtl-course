import { useState } from 'react';
import './App.css';

function App() {
  const [isRed, setIsRed] = useState(true);
  const [isDisable, setIsDisable] = useState(false);

  return (
    <div>
      <button style={{ backgroundColor: isRed ? 'red' : 'dodgerblue' }}
        onClick={() => setIsRed(!isRed)}
        disabled={isDisable}
      >
        Change to {isRed ? 'blue' : 'red'}
      </button>
      <br />
      <span>{isDisable ? 'Enable' : 'Disable'} button</span>
      <input type="checkbox" onClick={() => setIsDisable(!isDisable)} />
    </div>
  );
}

export default App;
