import { PastSteps, RemainingSteps } from './components';
import { useStepper } from '../../hooks';

import './stepper-bar.css';

function StepperBar() {
  const { currentStep: activeStep, steps } = useStepper();

  return (
    <div className="stepper-bar">
      <div className="step-container">
        <PastSteps />

        <span className="step-number">{activeStep}</span>
        <p>{steps[activeStep - 1]?.title}</p>
      </div>

      <RemainingSteps />
    </div>
  );
}

export { StepperBar };
