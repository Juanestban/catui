import { Meta, StoryFn } from '@storybook/react';
import { Checkbox, CheckboxProps } from '../Checkbox';
import { Wrapper } from '../../ui/Wrapper';

const meta = {
  title: 'Cat-UI/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    isChecked: { control: 'boolean', defaultValue: false },
    isIndeterminate: { control: 'boolean', defaultValue: false },
    isDisabled: { control: 'boolean', defaultValue: false },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;

export const Main: StoryFn<CheckboxProps> = ({ isChecked, isIndeterminate, isDisabled }) => {
  return (
    <Checkbox isChecked={isChecked} isIndeterminate={isIndeterminate} isDisabled={isDisabled}>
      option 1
    </Checkbox>
  );
};

Main.args = {
  isChecked: false,
  isIndeterminate: false,
  isDisabled: false,
};

export const MultiOptions: StoryFn<CheckboxProps> = () => {
  return (
    <Wrapper>
      <Checkbox name="checkbox" isDisabled>
        option 1
      </Checkbox>
      <Checkbox name="checkbox" isChecked isDisabled>
        option 2
      </Checkbox>
      <Checkbox name="checkbox" isChecked isIndeterminate isDisabled>
        option 3
      </Checkbox>
      <Checkbox name="checkbox">option 4</Checkbox>
    </Wrapper>
  );
};
