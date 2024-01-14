import { forwardRef } from 'react';
import type { FC, DetailedHTMLProps, ButtonHTMLAttributes } from 'react';
import cn from 'classnames';

import s from './Button.module.css';

type PrimitiveButton = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

type Role = 'info' | 'warning' | 'danger' | 'success';

interface ButtonProps extends Omit<PrimitiveButton, 'role'> {
  /** are someone know how works the variants? */
  variant?: 'normal' | 'outline' | 'ghost';
  /** role... more of sames 🐱‍💻 */
  role?: Role;
  /** sizes just with two words */
  size?: 'sm' | 'md' | 'lg' | 'xlg';
  /** changed old role, that sounds good */
  htmlRole?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'normal',
      role = 'info',
      size = 'md',
      className,
      children,
      type = 'button',
      htmlRole,
      ...props
    }: ButtonProps,
    ref,
  ) => {
    return (
      <button
        ref={ref}
        type={type}
        role={htmlRole}
        className={cn(s.base, s[variant], s[size], s[role], className)}
        {...props}
      >
        {children}
      </button>
    );
  },
) as FC<ButtonProps>;

export default Button;
export type { ButtonProps };
