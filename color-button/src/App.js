import { useState } from 'react';
import './App.css';

function App() {
  const [isRed, setIsRed] = useState(true);
  const [isDisable, setIsDisable] = useState(false);

  return (
    <div>
      <button style={{ backgroundColor: isDisable ? 'gray' : isRed ? 'red' : 'dodgerblue' }}
        onClick={() => setIsRed(!isRed)}
        disabled={isDisable}
      >
        Change to {isRed ? 'blue' : 'red'}
      </button>
      <br />
      <input
        id='disable-button-checkbox'
        type="checkbox"
        onClick={() => setIsDisable(!isDisable)}
      />
      <label htmlFor='disable-button-checkbox'>
        {isDisable ? 'Enable' : 'Disable'} button
      </label>
    </div>
  );
}

export default App;
