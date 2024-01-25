import { forwardRef } from 'react';
import type { FC, DetailedHTMLProps, ButtonHTMLAttributes } from 'react';
import cn from 'classnames';

import { FontSize, Role } from '../../types';

import s from './Button.module.css';

type PrimitiveButton = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

type Size = Exclude<FontSize, 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl'>;

interface ButtonProps extends Omit<PrimitiveButton, 'role' | 'disabled'> {
  /** are someone know how works the variants? */
  variant?: 'normal' | 'outline' | 'ghost';
  /** role... more of sames 🐱‍💻 */
  role?: Role;
  /** sizes just with two words */
  size?: Size;
  /** changed old role, that sounds good */
  htmlRole?: string;
  /** disabled button prop */
  isDisabled?: boolean;
  Icon?: JSX.Element;
  iconRight?: boolean;
  iconLeft?: boolean;
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
      isDisabled,
      Icon,
      iconLeft,
      iconRight,
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
        className={cn(
          'font-lato-title',
          s.base,
          s[variant],
          s[size],
          s[role],
          isDisabled && s.isDisabled,
          className,
        )}
        disabled={isDisabled}
        {...props}
      >
        {iconLeft && Icon ? Icon : null}
        {children}
        {iconRight && Icon ? Icon : null}
      </button>
    );
  },
) as FC<ButtonProps>;

export default Button;
export type { ButtonProps };
