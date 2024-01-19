import { FC, DetailedHTMLProps, HTMLAttributes, forwardRef } from 'react';
import cn from 'classnames';

import s from './Divider.module.css';

type PrimitiveSpan = DetailedHTMLProps<HTMLAttributes<HTMLHRElement>, HTMLHRElement>;

interface DividerProps extends Omit<PrimitiveSpan, 'children' | 'aria-orientation'> {
  orientation?: 'horizontal' | 'vertical';
}

const Divider = forwardRef<HTMLHRElement, DividerProps>(
  ({ className, orientation = 'horizontal', ...props }, ref) => {
    return (
      <hr
        ref={ref}
        className={cn(s.divider, className)}
        aria-orientation={orientation}
        {...props}
      />
    );
  },
) as FC<DividerProps>;

export default Divider;
export type { DividerProps };
