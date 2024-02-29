import { FC, forwardRef } from 'react';
import cn from 'classnames';

import { PrimitiveImageProps } from '../../types';

import s from './Image.module.css';

type AspectRatio = 'auto' | '1/1' | '16/9';

interface ImageProps extends PrimitiveImageProps<HTMLImageElement> {
  aspect?: AspectRatio;
  fit?: 'contain' | 'fill' | 'cover';
  withBlur?: boolean;
  withBorder?: boolean;
  unselect?: boolean;
}

const options: Record<AspectRatio, string> = {
  auto: s.aspectAuto,
  '16/9': s.aspect16,
  '1/1': s.aspect1,
};

const Image = forwardRef<HTMLImageElement, ImageProps>(
  (
    {
      className,
      aspect = '1/1',
      fit = 'cover',
      withBlur,
      withBorder = true,
      unselect,
      src,
      alt,
      draggable,
      ...props
    },
    ref,
  ) => {
    return (
      <div className={cn(s.container, !withBorder && s.transparent)}>
        <img
          ref={ref}
          className={cn(
            s.image,
            options[aspect],
            s[fit],
            unselect && s.unselect,
            withBlur && s.withBlur,
            className,
          )}
          src={src}
          alt={alt}
          draggable={draggable ?? unselect}
          {...props}
        />
      </div>
    );
  },
) as FC<ImageProps>;

export default Image;
export type { ImageProps };
