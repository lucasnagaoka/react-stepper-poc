import { Fragment, useMemo, useState } from 'react';

import { Button, Step, Stepper } from '../../components';
import { step1, step2, step3, step4 } from '../../mock';

import './stepper-section.css';

const steps = [step1, step2, step3, step4];

function StepperSection() {
  const [currentStep, setCurrentStep] = useState(0);
  const stepsLength = useMemo(() => steps.length, [steps]);

  const handleNext = () => {
    if (currentStep < stepsLength) {
      setCurrentStep((prevCurrentStep) => prevCurrentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep !== 0) {
      setCurrentStep((prevCurrentStep) => prevCurrentStep - 1);
    }
  };

  const handleSubmit = () => {
    console.log('Submitting...');
  };

  return (
    <div className="card">
      <hr></hr>

      <h2>Stepper section</h2>
      <section>
        <Stepper activeStep={currentStep}>
          {steps.map(({ title, step }) => (
            <Fragment key={step}>
              <Step title={title} position={step} />

              <div className="stepper-button-section">
                <Button
                  onClick={handleBack}
                  label={currentStep === 0 ? 'Cancel' : 'Back'}
                  disabled={currentStep === 0}
                />
                <Button
                  onClick={
                    currentStep !== stepsLength ? handleNext : handleSubmit
                  }
                  label={currentStep !== stepsLength ? 'Next' : 'Submit'}
                />
              </div>
            </Fragment>
          ))}
        </Stepper>
      </section>
    </div>
  );
}

export { StepperSection };
