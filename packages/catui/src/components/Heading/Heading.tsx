import { FC, DetailedHTMLProps, HTMLAttributes, forwardRef } from 'react';
import cn from 'classnames';

import s from './Heading.module.css';

interface HeadingProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  //
}

const Heading = forwardRef<HTMLDivElement, HeadingProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn(s.container, className)} {...props}>
        {children}
      </div>
    );
  },
) as FC<HeadingProps>;

export default Heading;
export type { HeadingProps };
