import { HTMLAttributes } from 'react';
import { ButtonHTMLAttributes } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string;
};

function Button({ label, type = 'button', ...props }: ButtonProps) {
  return (
    <button type={type} {...props}>
      {label}
    </button>
  );
}

export { Button };
