import { forwardRef } from 'react';
import type { FC, DetailedHTMLProps, ButtonHTMLAttributes } from 'react';
import cn from 'classnames';

import s from './Button.module.css';

type PrimitiveButton = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

type Role = 'primary' | 'secondary' | 'tertiary' | 'info' | 'warning' | 'danger' | 'success';

interface ButtonProps extends Omit<PrimitiveButton, 'role'> {
  variant?: '' | 'ghost';
  role?: Role;
  htmlRole?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { variant = '', role = 'primary', className, children, type = 'button', htmlRole, ...props },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        type={type}
        role={htmlRole}
        className={cn(s.base, s[variant], s[role], className)}
        {...props}
      >
        {children}
      </button>
    );
  },
) as FC<ButtonProps>;

export default Button;
export type { ButtonProps };
