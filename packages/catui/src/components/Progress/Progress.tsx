import { FC, DetailedHTMLProps, HTMLAttributes, forwardRef } from 'react';
import cn from 'classnames';

import { normalizePercentage } from '../../utils/normalize';
import { Role } from '../../types';
import { Text } from '../Text';

import s from './Progress.module.css';

type PrimitiveDiv = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

interface ProgressProps extends Omit<PrimitiveDiv, 'children' | 'color'> {
  /** colors cute 🐱‍🏍 */
  color?: Role;
  /** quantity: 0 to 100 🐱‍🐉 */
  percentage?: number;
  /** border-radius */
  round?: number;
  /** you know */
  height?: number;
}

const Progress = forwardRef<HTMLDivElement, ProgressProps>(
  ({ className, percentage = 0, color = 'info', round, style, height, ...props }, ref) => {
    const { ptg } = normalizePercentage(percentage);

    return (
      <div
        ref={ref}
        className={cn(s.container, className)}
        style={{ borderRadius: round, height, ...style }}
        {...props}
      >
        <span className={cn(s.progress, s[color])} style={{ width: ptg, borderRadius: round }} />
        <Text className={s.text} fontSize="xs" color="white" fontWeight="semibold">
          {ptg}
        </Text>
      </div>
    );
  },
) as FC<ProgressProps>;

export default Progress;
export type { ProgressProps };
