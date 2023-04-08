import { useState } from 'react';
import reactLogo from '/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

import { Step, Stepper } from './components';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

        <hr></hr>

        <h2>Stepper section</h2>
        <section>
          <Stepper>
            <Step />
          </Stepper>
        </section>
      </div>
    </div>
  );
}

export default App;
