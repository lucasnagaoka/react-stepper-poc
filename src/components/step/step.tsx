import { useStepper } from '../../hooks';

import type { ReactNode } from 'react';

type StepProps = {
  children?: ReactNode;
  stepNumber: number;
  stepContent: {
    fields: Array<{
      text: string;
      type: string;
    }>;
  };
};

function Step({ children, stepContent, stepNumber }: StepProps) {
  const { currentStep: activeStep } = useStepper();

  return (
    <>
      {children ? (
        <div>{children}</div>
      ) : (
        <div>
          {activeStep === stepNumber
            ? stepContent?.fields?.map(({ text }) => <p key={text}>{text}</p>)
            : null}
        </div>
      )}
    </>
  );
}

export { Step };
