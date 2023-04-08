import { StepperBarProps } from '../';

function PastSteps({ activeStep, steps }: StepperBarProps) {
  return (
    <>
      {steps.map(({ step }) => {
        if (activeStep > step) {
          return (
            <span className="step-number reverse" key={`past-steps-${step}`}>
              {step}
            </span>
          );
        }
      })}
    </>
  );
}

export { PastSteps };
