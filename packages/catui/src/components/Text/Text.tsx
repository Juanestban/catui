import { FC, DetailedHTMLProps, HTMLAttributes, forwardRef, createElement } from 'react';
import cn from 'classnames';

import s from './Text.module.css';

interface TextProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  as: 'dt' | 'dd' | 'p' | 'span' | 'strong' | 'legend';
}

const Text = forwardRef<HTMLElement, TextProps>(({ as, className, children, ...props }, ref) => {
  return createElement(as, { ref, className: cn(s.container, className), children, ...props });
}) as FC<TextProps>;

export default Text;
export type { TextProps };
