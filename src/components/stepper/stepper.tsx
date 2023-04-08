import type { ReactElement, ReactNode } from 'react';

type StepperProps = {
  activeStep: number;
  children: ReactNode;
};

function Stepper({ activeStep = 0, children }: StepperProps) {
  return <>{children}</>;
}

export { Stepper };
