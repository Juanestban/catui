import { Meta, StoryFn } from '@storybook/react';

import { Tooltip, TooltipProps } from '.';
import { Text } from '../Text';
import { Button } from '../Button';
import { Wrapper } from '../../ui/Wrapper';

type Position = TooltipProps['position'];

const OptionsPosition: Position[] = [
  'left-start',
  'left',
  'left-end',
  'top-start',
  'top',
  'top-end',
  'right-start',
  'right',
  'right-end',
  'bottom-start',
  'bottom',
  'bottom-end',
];

const meta = {
  title: 'Cat-UI/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    position: {
      control: 'select',
      options: OptionsPosition,
    },
    content: { control: 'text', defaultValue: 'cute cats 💜' },
    hasArrow: { control: 'boolean', defaultValue: false },
    isDisabled: { control: 'boolean', defaultValue: false },
  },
} satisfies Meta<typeof Tooltip>;

export default meta;

export const Main: StoryFn<TooltipProps> = ({
  position,
  hasArrow,
  children,
  content,
  isDisabled,
}) => {
  return (
    <Tooltip position={position} content={content} hasArrow={hasArrow} isDisabled={isDisabled}>
      <Text>{children}</Text>
    </Tooltip>
  );
};

Main.args = {
  position: 'bottom',
  children: 'Kittens 🐈',
  content: 'cute cats 💜',
  hasArrow: false,
  isDisabled: false,
};

export const Positions: StoryFn<TooltipProps> = ({ content, hasArrow }) => {
  return (
    <Wrapper flexDirection="column">
      <Wrapper>
        <Tooltip position="top-start" content={content} hasArrow={hasArrow}>
          <Button>Top Start</Button>
        </Tooltip>
        <Tooltip position="top" content={content} hasArrow={hasArrow}>
          <Button>Top</Button>
        </Tooltip>
        <Tooltip position="top-end" content={content} hasArrow={hasArrow}>
          <Button>Top End</Button>
        </Tooltip>
      </Wrapper>
      <Wrapper>
        <Tooltip position="bottom-start" content={content} hasArrow={hasArrow}>
          <Button>Bottom Start</Button>
        </Tooltip>
        <Tooltip position="bottom" content={content} hasArrow={hasArrow}>
          <Button>Bottom</Button>
        </Tooltip>
        <Tooltip position="bottom-end" content={content} hasArrow={hasArrow}>
          <Button>Bottom End</Button>
        </Tooltip>
      </Wrapper>
      <Wrapper>
        <Tooltip position="right-start" content={content} hasArrow={hasArrow}>
          <Button>Right Start</Button>
        </Tooltip>
        <Tooltip position="right" content={content} hasArrow={hasArrow}>
          <Button>Right</Button>
        </Tooltip>
        <Tooltip position="right-end" content={content} hasArrow={hasArrow}>
          <Button>Right End</Button>
        </Tooltip>
      </Wrapper>
      <Wrapper>
        <Tooltip position="left-start" content={content} hasArrow={hasArrow}>
          <Button>Left Start</Button>
        </Tooltip>
        <Tooltip position="left" content={content} hasArrow={hasArrow}>
          <Button>Left</Button>
        </Tooltip>
        <Tooltip position="left-end" content={content} hasArrow={hasArrow}>
          <Button>Left End</Button>
        </Tooltip>
      </Wrapper>
    </Wrapper>
  );
};

Positions.args = {
  content: 'cute cats 💜',
  hasArrow: false,
};
