import { FC, DetailedHTMLProps, HTMLAttributes, forwardRef } from 'react';
import cn from 'classnames';

import s from './Text.module.css';

interface TextProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  //
}

const Text = forwardRef<HTMLDivElement, TextProps>(({ className, children, ...props }, ref) => {
  return (
    <div ref={ref} className={cn(s.container, className)} {...props}>
      {children}
    </div>
  );
}) as FC<TextProps>;

export default Text;
export type { TextProps };
