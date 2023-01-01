import { useState } from 'react';
import './App.css';

export function replaceCamelWithSpaces(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, ' $1');
};

function App() {
  const [isDisable, setIsDisable] = useState(false);
  const [buttonColor, setButtonColor] = useState('MediumVioletRed');

  const newColorButton = buttonColor === 'MediumVioletRed' ? 'MidnightBlue' : 'MediumVioletRed';

  return (
    <div>
      <button style={{ color: 'white', backgroundColor: isDisable ? 'gray' : buttonColor }}
        onClick={() => setButtonColor(newColorButton)}
        disabled={isDisable}
      >
        Change to {replaceCamelWithSpaces(newColorButton)}
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
