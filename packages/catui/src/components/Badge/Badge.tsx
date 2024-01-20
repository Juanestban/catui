import { FC, forwardRef } from 'react';
import cn from 'classnames';

import { VariantBadge, PrimitiveProps, Role } from '../../types';
import { Text } from '../Text';

import s from './Badge.module.css';

interface BadgeProps extends PrimitiveProps<HTMLDivElement> {
  variant?: VariantBadge;
  color?: Role;
  fontSize?: number | string;
}

const Badge = forwardRef<HTMLDivElement, BadgeProps>(
  (
    { className, variant = 'normal', color = 'success', fontSize = 10, children, ...props },
    ref,
  ) => {
    return (
      <div ref={ref} className={cn(s.container, s[variant], s[color], className)} {...props}>
        <Text fontWeight="bold" style={{ fontSize }}>
          {children}
        </Text>
      </div>
    );
  },
) as FC<BadgeProps>;

export default Badge;
export type { BadgeProps };
