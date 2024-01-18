import { FC, DetailedHTMLProps, HTMLAttributes, forwardRef, createElement } from 'react';
import cn from 'classnames';

import { FontSize, Role } from '../../types';

import s from './Heading.module.css';

interface HeadingProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  fontSize?: Exclude<FontSize, '6xl' | '5xl'>;
  fontWeight?: 'thin' | 'normal' | 'semibold' | 'bold';
  wrap?: 'balance' | 'nowrap' | 'pretty' | 'stable' | 'wrap';
  decoration?:
    | 'dashed'
    | 'dotted'
    | 'double'
    | 'line-through'
    | 'overline'
    | 'solid'
    | 'underline'
    | 'wavy';
  color?: 'base' | Role | 'black' | 'white';
  withEllipse?: boolean;
}

const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  (
    {
      as = 'h2',
      className,
      fontSize = 'lg',
      fontWeight = 'bold',
      wrap = 'balance',
      decoration,
      color = 'base',
      withEllipse,
      children,
      ...props
    },
    ref,
  ) => {
    const normalizedFontSize = Number(fontSize[0]) ? `_${fontSize}` : fontSize;

    return createElement(as, {
      ref,
      className: cn(
        s.heading,
        s[normalizedFontSize],
        s[fontWeight],
        s[wrap],
        decoration && s[decoration],
        s[color],
        withEllipse && s.withEllipse,
        className,
      ),
      children,
      ...props,
    });
  },
) as FC<HeadingProps>;

export default Heading;
export type { HeadingProps };
