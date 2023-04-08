import { PastSteps, RemainingSteps } from './components';

import type { StepperBarProps } from '.';

import './stepper-bar.css';

function StepperBar({ activeStep, steps }: StepperBarProps) {
  return (
    <div className="stepper-bar">
      <div className="step-container">
        <PastSteps activeStep={activeStep} steps={steps} />

        <span className="step-number">{activeStep}</span>
        <p>{steps[activeStep - 1]?.title}</p>
      </div>

      <RemainingSteps activeStep={activeStep} steps={steps} />
    </div>
  );
}

export { StepperBar };
