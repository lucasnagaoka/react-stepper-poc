import { useMemo } from 'react';
import { useAtom } from 'jotai';

import { currentStepAtom } from '../atoms';
import { step1, step2, step3, step4 } from '../mock';

function useStepper() {
  const [currentStep, setCurrentStep] = useAtom(currentStepAtom);
  const steps = useMemo(() => [step1, step2, step3, step4], []);
  const stepsLength = useMemo(() => steps.length, [steps]);

  const handleNext = () => {
    if (currentStep < stepsLength) {
      setCurrentStep((prevCurrentStep) => prevCurrentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep >= 0) {
      setCurrentStep((prevCurrentStep) => prevCurrentStep - 1);
    }
  };

  const handleSubmit = (onSubmit: Function) => {
    console.log('Submitting...');
    onSubmit();
  };

  return {
    currentStep,
    steps,
    stepsLength,
    handleNext,
    handleBack,
    handleSubmit,
  };
}

export { useStepper };
