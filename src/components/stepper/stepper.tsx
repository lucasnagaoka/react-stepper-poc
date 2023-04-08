import type { ReactElement } from 'react';

type StepperProps = {
  children: ReactElement;
};

function Stepper({ children }: StepperProps) {
  return (
    <>
      <p>Hello Stepper</p>
      {children}
    </>
  );
}

export { Stepper };
