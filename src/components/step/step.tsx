import type { ReactElement } from 'react';

import './step.css';

type StepProps = {
  title: string;
  position: number;
  children?: ReactElement;
};

function Step({ title, position, children }: StepProps) {
  return (
    <>
      <div className="step-container">
        <span className="step-number">{position}</span>
        <p>{title}</p>
      </div>

      {children ?? <div>{children}</div>}
    </>
  );
}

export { Step };
