import type { Meta, StoryFn } from '@storybook/react';

import { Button, ButtonProps } from 'catui';
import { Wrapper } from '../components/Wrapper';

type Variant = ButtonProps['variant'];
type Size = ButtonProps['size'];

const meta = {
  title: 'Cat-UI/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['normal', 'outline', 'ghost'] as Variant[] },
    size: { control: 'select', options: ['sm', 'md', 'lg', 'xlg'] as Size[] },
    role: { control: 'text' },
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

export const Variants = () => {
  return (
    <Wrapper>
      <Button variant="normal">Variant Normal</Button>
      <Button variant="outline">Variant Outline</Button>
      <Button variant="ghost">Variant Ghost</Button>
    </Wrapper>
  );
};

export const Sizes = () => {
  return (
    <Wrapper>
      <Button size="sm">Size Small</Button>
      <Button size="md">Size Medium</Button>
      <Button size="lg">Size Large</Button>
      <Button size="xlg">Size XLarge</Button>
    </Wrapper>
  );
};

export const Roles = () => {
  return (
    <Wrapper>
      <Button role="info">Role Info</Button>
      <Button role="warning">Role Warning</Button>
      <Button role="success">Role Success</Button>
      <Button role="danger">Role Danger</Button>
    </Wrapper>
  );
};
