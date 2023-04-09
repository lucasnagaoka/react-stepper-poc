import { Fragment } from 'react';

import { Button, Step, Stepper, StepperBar } from '../../components';

import './stepper-section.css';
import { useStepper } from '../../hooks';

function StepperSection() {
  const {
    currentStep,
    steps,
    stepsLength,
    handleBack,
    handleNext,
    handleSubmit,
  } = useStepper();

  function onSubmit() {
    console.log('onSubmit');
  }

  return (
    <div className="card">
      <hr></hr>

      <h2>Stepper section</h2>
      <section>
        <Stepper activeStep={currentStep}>
          <StepperBar activeStep={currentStep} steps={steps} />

          {steps.map(({ step, content }) => (
            <Fragment key={step}>
              <Step
                stepContent={content}
                activeStep={currentStep}
                stepNumber={step}
              />

              {currentStep === step ? (
                <div className="stepper-button-section">
                  <Button
                    onClick={handleBack}
                    label={currentStep === 1 ? 'Cancel' : 'Back'}
                    disabled={currentStep === 1}
                  />
                  <Button
                    onClick={
                      currentStep !== stepsLength
                        ? handleNext
                        : () => handleSubmit(onSubmit)
                    }
                    label={currentStep !== stepsLength ? 'Next' : 'Submit'}
                  />
                </div>
              ) : null}
            </Fragment>
          ))}
        </Stepper>
      </section>
    </div>
  );
}

export { StepperSection };
