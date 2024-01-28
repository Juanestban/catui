import { FC, forwardRef } from 'react';
import cn from 'classnames';

import { VariantBadge, PrimitiveProps, Role } from '../../types';

import s from './Badge.module.css';

interface BadgeProps extends PrimitiveProps<HTMLSpanElement> {
  color?: Role;
  variant?: VariantBadge;
  fontSize?: number | string;
}

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = 'normal', color = 'info', fontSize = 14, children, ...props }, ref) => {
    return (
      <span ref={ref} className={cn(s.container, s[variant], s[color], className)} {...props}>
        <p className={s.heading} style={{ fontSize }}>
          {children}
        </p>
      </span>
    );
  },
) as FC<BadgeProps>;

export default Badge;
export type { BadgeProps };
