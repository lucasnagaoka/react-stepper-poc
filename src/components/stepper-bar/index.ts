export type StepperBarProps = {
  activeStep: number;
  steps: Array<{
    step: number;
    title: string;
  }>;
};

export * from './stepper-bar';
