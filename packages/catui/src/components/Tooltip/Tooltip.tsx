import { FC, forwardRef, ReactNode } from 'react';
import cn from 'classnames';

import s from './Tooltip.module.css';
import { PrimitiveProps } from '@catui/types';

type PrimitiveDivProps = PrimitiveProps<HTMLDivElement>;

interface TooltipProps extends Omit<PrimitiveDivProps, 'content'> {
  content?: ReactNode;
  position?:
    | 'left-start'
    | 'left'
    | 'left-end'
    | 'top-start'
    | 'top'
    | 'top-end'
    | 'right-start'
    | 'right'
    | 'right-end'
    | 'bottom-start'
    | 'bottom'
    | 'bottom-end';
  hasArrow?: boolean;
  isDisabled?: boolean;
}

const Tooltip = forwardRef<HTMLDivElement, TooltipProps>(
  ({ className, content, position = 'bottom', hasArrow, isDisabled, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn(s.container, className)} {...props}>
        <div className={s.children}>{children}</div>
        <span className={cn(s.content, isDisabled && s.isDisabled, s[position])}>
          <div className={cn(s.contentArrow, s[position], hasArrow && s.hasArrow)}>{content}</div>
        </span>
      </div>
    );
  },
) as FC<TooltipProps>;

export default Tooltip;
export type { TooltipProps };
