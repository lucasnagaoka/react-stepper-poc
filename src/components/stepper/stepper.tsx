import type { ReactNode } from 'react';

type StepperProps = {
  children: ReactNode;
};

function Stepper({ children }: StepperProps) {
  return <>{children}</>;
}

export { Stepper };
