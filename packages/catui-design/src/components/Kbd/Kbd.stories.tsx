import { Meta, StoryFn } from '@storybook/react';

import { Text } from '../Text';
import { Kbd, KbdProps } from '.';

const meta = {
  title: 'Cat-UI/Kbd',
  component: Kbd,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Kbd>;

export default meta;

export const Main: StoryFn<KbdProps> = () => {
  return (
    <Text as="span">
      <Kbd>win</Kbd> + <Kbd>shift</Kbd> + <Kbd>S</Kbd>
    </Text>
  );
};
