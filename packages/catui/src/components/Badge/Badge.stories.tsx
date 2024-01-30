import type { Meta, StoryFn } from '@storybook/react';

import { Badge, BadgeProps } from '../Badge';
import { Wrapper } from '../../ui/Wrapper';

type Variant = BadgeProps['variant'];

const meta = {
  title: 'Cat-UI/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['normal', 'outline', 'subtitle'] as Variant[] },
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

Main.args = {
  variant: 'normal',
  color: 'info',
  children: 'Persian',
};

export const Variants: StoryFn<BadgeProps> = ({ color }) => {
  return (
    <Wrapper>
      <Badge color={color}>normal</Badge>
      <Badge variant="subtitle" color={color}>
        subtitle
      </Badge>
      <Badge variant="outline" color={color}>
        outline
      </Badge>
    </Wrapper>
  );
};

Variants.args = {
  color: 'info',
};

export const Colors: StoryFn<BadgeProps> = ({ variant }) => {
  return (
    <Wrapper>
      <Badge variant={variant} color="info">
        info
      </Badge>
      <Badge variant={variant} color="success">
        success
      </Badge>
      <Badge variant={variant} color="warning">
        warning
      </Badge>
      <Badge variant={variant} color="danger">
        danger
      </Badge>
    </Wrapper>
  );
};

Colors.args = {
  variant: 'normal',
};
