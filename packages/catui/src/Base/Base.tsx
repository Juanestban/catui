import { forwardRef } from 'react';
import type { FC, DetailedHTMLProps, HTMLAttributes } from 'react';
import cn from 'classnames';

import s from './Base.module.css';

interface BaseProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  //
}

const Base = forwardRef<HTMLDivElement, BaseProps>(({ className, children, ...props }, ref) => {
  return (
    <div ref={ref} className={cn(s.container, className)} {...props}>
      {children}
    </div>
  );
}) as FC<BaseProps>;

export default Base;
export type { BaseProps };
