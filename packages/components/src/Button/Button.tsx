import { FC, DetailedHTMLProps, HTMLAttributes, forwardRef } from 'react';
import cn from 'classnames';

import s from './Button.module.css'
  
interface ButtonProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  //
}
  
const Button = forwardRef<HTMLDivElement, ButtonProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn(s.container, className)} {...props}>
        {children}
      </div>
    );
  }
) as FC<ButtonProps>;
  
export default Button;
export type { ButtonProps }

