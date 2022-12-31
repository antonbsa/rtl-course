import { useState } from 'react';
import './App.css';

function App() {
  const [isRed, setIsRed] = useState(true);

  return (
    <div>
      <button style={{ backgroundColor: isRed ? 'red' : 'dodgerblue' }}
        onClick={() => setIsRed(!isRed)}
      >
        Change to {isRed ? 'blue' : 'red'}
      </button>
    </div>
  );
}

export default App;
