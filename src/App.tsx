import reactLogo from '/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

import { StepperSection } from './pages';

function App() {
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

      <StepperSection />
    </div>
  );
}

export default App;
