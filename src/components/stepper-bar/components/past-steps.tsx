import { useStepper } from '../../../hooks';

function PastSteps() {
  const { currentStep: activeStep, steps } = useStepper();

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
