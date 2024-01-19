import { FC, DetailedHTMLProps, HTMLAttributes, forwardRef } from 'react';
import cn from 'classnames';

import s from './Divider.module.css';

type PrimitiveSpan = DetailedHTMLProps<HTMLAttributes<HTMLHRElement>, HTMLHRElement>;

interface DividerProps extends Omit<PrimitiveSpan, 'children' | 'aria-orientation'> {
  orientation?: 'horizontal' | 'vertical';
  height?: number;
}

const Divider = forwardRef<HTMLHRElement, DividerProps>(
  ({ className, orientation = 'horizontal', height = 50, ...props }, ref) => {
    return (
      <div
        className={cn(s.container, s[orientation])}
        style={{ height: orientation === 'horizontal' ? undefined : height }}
      >
        <hr
          ref={ref}
          className={cn(s.divider, s[orientation], className)}
          aria-orientation={orientation}
          {...props}
        />
      </div>
    );
  },
) as FC<DividerProps>;

export default Divider;
export type { DividerProps };
