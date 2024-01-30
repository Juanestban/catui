import { Meta, StoryFn } from '@storybook/react';

import { Progress, ProgressProps } from '.';
import { Wrapper } from '../../ui/Wrapper';

const meta = {
  title: 'Cat-UI/Progress',
  component: Progress,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    percentage: { control: 'number', defaultValue: 0 },
    color: { control: 'select', options: ['info', 'success', 'warning', 'danger'] },
    round: { control: 'number', defaultValue: 5 },
    height: { control: 'number', defaultValue: 20 },
  },
} satisfies Meta<typeof Progress>;

export default meta;

export const Main: StoryFn<ProgressProps> = ({ percentage, color, round, ...props }) => {
  return <Progress percentage={percentage} color={color} round={round} {...props} />;
};

Main.args = {
  percentage: 0,
  color: 'info',
  round: 5,
  height: 20,
};

export const Colors: StoryFn<ProgressProps> = ({ round }) => {
  return (
    <Wrapper flexDirection="column">
      <Progress color="info" percentage={10} round={round} />
      <Progress color="success" percentage={30} height={30} round={round} />
      <Progress color="warning" percentage={50} height={35} round={round} />
      <Progress color="danger" percentage={80} height={40} round={round} />
    </Wrapper>
  );
};

Colors.args = {
  round: 5,
};
