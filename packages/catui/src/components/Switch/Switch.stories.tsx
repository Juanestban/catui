import { Meta, StoryFn } from '@storybook/react';

import { Switch, SwitchProps } from '../Switch';

const meta = {
  title: 'Cat-UI/Switch',
  component: Switch,
  parameters: {
    layaut: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    isChecked: { control: 'boolean' },
    isDisabled: { control: 'boolean' },
  },
} satisfies Meta<typeof Switch>;

export default meta;

export const Main: StoryFn<SwitchProps> = ({ isChecked, isDisabled }) => {
  return <Switch isChecked={isChecked} isDisabled={isDisabled} />;
};

Main.args = {
  isChecked: false,
  isDisabled: false,
};
