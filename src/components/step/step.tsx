import type { ReactNode } from 'react';

type StepProps = {
  children?: ReactNode;
  activeStep: number;
  stepNumber: number;
  stepContent: {
    fields: Array<{
      text: string;
      type: string;
    }>;
  };
};

function Step({ children, stepContent, activeStep, stepNumber }: StepProps) {
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
