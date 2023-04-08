import type { ReactNode } from 'react';

type StepProps = {
  children?: ReactNode;
};

function Step({ children }: StepProps) {
  return <>{children ?? <div>{children}</div>}</>;
}

export { Step };
