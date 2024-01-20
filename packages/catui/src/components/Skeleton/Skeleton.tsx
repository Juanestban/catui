import { FC, forwardRef } from 'react';
import cn from 'classnames';

import { PrimitiveProps } from '../../types';

import s from './Skeleton.module.css';

interface SkeletonProps extends PrimitiveProps<HTMLDivElement> {
  h?: number | string;
  w?: number | string;
  isRound?: boolean;
  isLoading?: boolean;
}

const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>(
  ({ className, w: width, h: height, style, isRound, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(s.container, isRound && s.round, className)}
        style={{ width, height, ...style }}
        {...props}
      >
        <div className={s.skeleton} />
      </div>
    );
  },
) as FC<SkeletonProps>;

export default Skeleton;
export type { SkeletonProps };
