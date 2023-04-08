import { useState } from 'react';
import reactLogo from '/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

import { Button, Step, Stepper } from './components';
import { step1, step2, step3, step4 } from './mock';

const steps = [step1, step2, step3, step4];

function App() {
  const [count, setCount] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);

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

      <div className="card">
        <hr></hr>

        <h2>Stepper section</h2>
        <section>
          <Stepper activeStep={currentStep}>
            {steps.map(({ title, step }) => (
              <>
                <Step title={title} position={step} key={step} />

                <div className="stepper-button-section">
                  <Button label="Back" />
                  <Button label="Next" />
                </div>
              </>
            ))}
          </Stepper>
        </section>
      </div>
    </div>
  );
}

export default App;
