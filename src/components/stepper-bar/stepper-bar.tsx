import { useEffect } from 'react';
import './stepper-bar.css';

type StepperBarProps = {
  activeStep: number;
  stepsTitles: string[];
};

function StepperBar({ activeStep, stepsTitles }: StepperBarProps) {
  useEffect(() => {
    console.log({ activeStep, stepsTitles });
  }, []);

  return (
    <div className="step-container">
      <span className="step-number">{activeStep}</span>
      <p>{stepsTitles[activeStep - 1]}</p>
    </div>
  );
}

export { StepperBar };
