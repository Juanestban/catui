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
  },
} satisfies Meta<typeof Divider>;

export default meta;

export const Main: StoryFn<DividerProps> = ({ orientation }) => {
  return <Divider orientation={orientation} />;
};

Main.args = {
  orientation: 'horizontal',
};
