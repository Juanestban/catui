import { FC, forwardRef } from 'react';
import cn from 'classnames';

import { PrimitiveProps, FontSize, Role } from '../../types';

import s from './Spinner.module.css';

interface SpinnerProps extends Omit<PrimitiveProps<HTMLDivElement>, 'children' | 'color'> {
  size?: Exclude<FontSize, '6xl' | '5xl' | '4xl' | '3xl' | '2xl'>;
  color?: Role;
}

const Spinner = forwardRef<HTMLDivElement, SpinnerProps>(
  ({ className, size = 'md', color = 'info', ...props }, ref) => {
    const normalizedSizes = Number(size[0]) ? `_${size}` : size;

    return (
      <div ref={ref} className={cn(s.container, s[color], className)} {...props}>
        <span className={cn(s.spinner, s[normalizedSizes], s[color])} />
      </div>
    );
  },
) as FC<SpinnerProps>;

export default Spinner;
export type { SpinnerProps };
