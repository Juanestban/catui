import { FC, DetailedHTMLProps, HTMLAttributes, forwardRef } from 'react';
import cn from 'classnames';

import s from './Kbd.module.css';

type KbdProps = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;

const Kbd = forwardRef<HTMLElement, KbdProps>(({ className, children, ...props }, ref) => {
  return (
    <kbd ref={ref} className={cn(s.kbd, className)} {...props}>
      {children}
    </kbd>
  );
}) as FC<KbdProps>;

export default Kbd;
export type { KbdProps };
