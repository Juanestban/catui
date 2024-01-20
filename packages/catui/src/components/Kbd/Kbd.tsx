import { FC, forwardRef } from 'react';
import cn from 'classnames';

import { PrimitiveProps } from '../../types';

import s from './Kbd.module.css';

type KbdProps = PrimitiveProps<HTMLElement>;

const Kbd = forwardRef<HTMLElement, KbdProps>(({ className, children, ...props }, ref) => {
  return (
    <kbd ref={ref} className={cn(s.kbd, className)} {...props}>
      {children}
    </kbd>
  );
}) as FC<KbdProps>;

export default Kbd;
export type { KbdProps };
