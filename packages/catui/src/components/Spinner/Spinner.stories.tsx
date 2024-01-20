import { Meta, StoryFn } from '@storybook/react';

import { Spinner, SpinnerProps } from '../Spinner';

const meta = {
  title: 'Cat-UI/Spinner',
  component: Spinner,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'] },
    color: { control: 'select', options: ['info', 'success', 'warning', 'danger'] },
  },
} satisfies Meta<typeof Spinner>;

export default meta;

export const Main: StoryFn<SpinnerProps> = ({ color, size }) => {
  return <Spinner size={size} color={color} />;
};

Main.args = {
  size: 'md',
  color: 'info',
};
