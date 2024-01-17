import type { Meta, StoryFn } from '@storybook/react';

import { Button, ButtonProps } from 'catui';
import { Wrapper } from '../components/Wrapper';

type Variant = ButtonProps['variant'];
type Size = ButtonProps['size'];
type Roles = ButtonProps['role'];

const meta = {
  title: 'Cat-UI/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['normal', 'outline', 'ghost'] as Variant[] },
    size: { control: 'select', options: ['xs', 'sm', 'md', 'lg'] as Size[] },
    role: { control: 'select', options: ['info', 'success', 'warning', 'danger'] as Roles[] },
  },
} satisfies Meta<typeof Button>;

export default meta;

export const Main: StoryFn<ButtonProps> = ({ variant, size, role, children }) => {
  return (
    <Button variant={variant} size={size} role={role}>
      {children}
    </Button>
  );
};

Main.args = {
  variant: 'normal',
  role: 'info',
  size: 'md',
  children: 'Main Button',
};

export const Variants: StoryFn<ButtonProps> = ({ role, size }) => {
  return (
    <Wrapper>
      <Button variant="normal" size={size} role={role}>
        Variant Normal
      </Button>
      <Button variant="outline" size={size} role={role}>
        Variant Outline
      </Button>
      <Button variant="ghost" size={size} role={role}>
        Variant Ghost
      </Button>
    </Wrapper>
  );
};

Variants.args = {
  role: 'info',
  size: 'md',
};

export const Sizes: StoryFn<ButtonProps> = ({ variant, role }) => {
  return (
    <Wrapper>
      <Button size="xs" variant={variant} role={role}>
        Size XSmall
      </Button>
      <Button size="sm" variant={variant} role={role}>
        Size Small
      </Button>
      <Button size="md" variant={variant} role={role}>
        Size Medium
      </Button>
      <Button size="lg" variant={variant} role={role}>
        Size Large
      </Button>
    </Wrapper>
  );
};

Sizes.args = { variant: 'normal', role: 'info' };

export const Roles: StoryFn<ButtonProps> = ({ variant, size }) => {
  return (
    <Wrapper>
      <Button role="info" variant={variant} size={size}>
        Role Info
      </Button>
      <Button role="warning" variant={variant} size={size}>
        Role Warning
      </Button>
      <Button role="success" variant={variant} size={size}>
        Role Success
      </Button>
      <Button role="danger" variant={variant} size={size}>
        Role Danger
      </Button>
    </Wrapper>
  );
};

Roles.args = {
  variant: 'normal',
  size: 'md',
};
