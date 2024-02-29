import { forwardRef, type FC } from 'react';
import cn from 'classnames';

import { FontSize, Role, PrimitiveButtonProps } from '../../types';

import s from './Button.module.css';

type PrimitiveButton = PrimitiveButtonProps<HTMLButtonElement>;

type Size = Exclude<FontSize, 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl'>;

interface ButtonProps extends Omit<PrimitiveButton, 'role' | 'disabled'> {
  /**
   * are someone know how works the variants?
   *
   * `'normal' | 'outline' | 'ghost'`
   *
   * **example:**
   *
   * ```jsx
   * <Button variant="outline">
   *   button
   * </Button>
   * ```
   *
   * [link example on storybook](https://catui-storybook.vercel.app/?path=/story/cat-ui-button--variants)
   */
  variant?: 'normal' | 'outline' | 'ghost';
  /**
   * role... more of sames 🐱‍💻
   *
   * `'info' | 'warning' | 'danger' | 'success'`
   *
   * **example:**
   *
   * ```jsx
   * <Button role="info">
   *   button
   * </Button>
   * ```
   *
   * [link example on storybook](https://catui-storybook.vercel.app/?path=/story/cat-ui-button--roles)
   */
  role?: Role;
  /**
   * sizes just with two words
   *
   * `'xs' | 'sm' | 'md' | 'lg'`
   *
   * **example:**
   *
   * ```jsx
   * <Button size="lg">
   *   button
   * </Button>
   * ```
   *
   * [link example on storybook](https://catui-storybook.vercel.app/?path=/story/cat-ui-button--sizes)
   */
  size?: Size;
  /**
   * changed old role, that sounds good
   *
   * replaced default prop role button by `htmlRole`
   *
   * **example:**
   *
   * ```jsx
   * <Button htmlRole="role">
   *   button
   * </Button>
   * ```
   */
  htmlRole?: string;
  /**
   * disabled button prop
   */
  isDisabled?: boolean;
  /**
   * Icon component just need set prop "name"
   *
   * ```jsx
   * import { Icon } from 'catui-design'
   *
   * // Usage
   * <Button Icon={<Icon name="HiArchiveBox" />} iconLeft>
   *   Button
   * </Button>
   * ```
   *
   * [link example on storybook](https://catui-storybook.vercel.app/?path=/story/cat-ui-button--with-icon)
   */
  Icon?: JSX.Element;
  /**
   * iconRight boolean if you wanna put on right or left
   */
  iconRight?: boolean;
  /**
   * iconLeft boolean if you wanna put on right or left
   */
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
