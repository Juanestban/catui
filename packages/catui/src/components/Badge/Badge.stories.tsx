import type { Meta, StoryFn } from '@storybook/react';

import { Badge, BadgeProps } from '../Badge';

type Variant = BadgeProps['variant'];

const meta = {
  title: 'Cat-UI/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['normal', 'outline', 'ghost'] as Variant[] },
    fontSize: { control: 'text' },
    color: { control: 'select', options: ['info', 'success', 'warning', 'danger'] },
  },
} satisfies Meta<typeof Badge>;

export default meta;

export const Main: StoryFn<BadgeProps> = ({ variant, fontSize, color, children }) => {
  return (
    <Badge variant={variant} fontSize={fontSize} color={color}>
      {children}
    </Badge>
  );
};

Main.args = {};
