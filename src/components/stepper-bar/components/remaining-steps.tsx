import { useStepper } from '../../../hooks';

function RemainingSteps() {
  const { currentStep: activeStep, steps } = useStepper();

  return (
    <div className="remaining-steps">
      {steps.map(({ step }) => {
        if (activeStep > step) {
          return null;
        } else if (activeStep !== step) {
          return (
            <span className="step-number disabled" key={`next-steps-${step}`}>
              {step}
            </span>
          );
        }
      })}
    </div>
  );
}

export { RemainingSteps };
