import { FC, forwardRef, createElement } from 'react';
import cn from 'classnames';

import { FontSize, PrimitiveProps, Role } from '../../types';

import s from './Text.module.css';

type PrimitiveText = PrimitiveProps<HTMLElement>;

interface TextProps extends Omit<PrimitiveText, 'color'> {
  as?:
    | 'dt'
    | 'dd'
    | 'p'
    | 'span'
    | 'strong'
    | 'legend'
    | 'b'
    | 'i'
    | 'u'
    | 'abbr'
    | 'cite'
    | 'del'
    | 'em'
    | 'ins'
    | 'kbd'
    | 'mark'
    | 's'
    | 'samp'
    | 'sub'
    | 'sup';
  fontSize?: FontSize;
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

const Text = forwardRef<HTMLElement, TextProps>(
  (
    {
      as = 'p',
      className,
      fontSize = 'md',
      fontWeight = 'normal',
      wrap = 'pretty',
      color = 'base',
      decoration,
      children,
      withEllipse,
      ...props
    },
    ref,
  ) => {
    const normalizedFontSize = Number(fontSize[0]) ? `_${fontSize}` : fontSize;

    return createElement(as, {
      ref,
      className: cn(
        s.text,
        s[normalizedFontSize],
        s[color],
        s[fontWeight],
        s[wrap],
        decoration && s[decoration],
        withEllipse && s.withEllipse,
        className,
      ),
      children,
      ...props,
    });
  },
) as FC<TextProps>;

export default Text;
export type { TextProps };
