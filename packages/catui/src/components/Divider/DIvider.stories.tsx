import type { Meta, StoryFn } from '@storybook/react';

import { Divider, DividerProps } from '../Divider';

const meta = {
  title: 'Cat-UI/Divider',
  component: Divider,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    orientation: { control: 'select', options: ['horizontal', 'vertical'] },
    height: { control: 'number', defaultValue: undefined },
  },
} satisfies Meta<typeof Divider>;

export default meta;

export const Main: StoryFn<DividerProps> = ({ orientation, height }) => {
  return <Divider orientation={orientation} height={height} />;
};

Main.args = {
  orientation: 'horizontal',
  height: undefined,
};
