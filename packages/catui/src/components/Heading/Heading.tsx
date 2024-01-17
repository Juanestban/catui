import { FC, DetailedHTMLProps, HTMLAttributes, forwardRef, createElement } from 'react';
import cn from 'classnames';

import s from './Heading.module.css';

interface HeadingProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

const Heading = forwardRef<HTMLDivElement, HeadingProps>(
  ({ as, className, children, ...props }, ref) => {
    return createElement(as, { ref, className: cn(s.container, className), children, ...props });
  },
) as FC<HeadingProps>;

export default Heading;
export type { HeadingProps };
