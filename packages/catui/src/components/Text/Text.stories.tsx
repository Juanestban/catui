import { Meta, StoryFn } from '@storybook/react';

import { Text, TextProps } from '../Text';
import { FontSize } from '../../types';

import { Wrapper } from '../../ui/Wrapper';

type As = TextProps['as'];

const asOptions = [
  'dt',
  'dd',
  'p',
  'span',
  'strong',
  'legend',
  'b',
  'i',
  'u',
  'abbr',
  'cite',
  'del',
  'em',
  'ins',
  'kbd',
  'mark',
  's',
  'samp',
  'sub',
  'sup',
] satisfies As[];

const sizesOptions = [
  '6xl',
  '5xl',
  '4xl',
  '3xl',
  '2xl',
  'xl',
  'lg',
  'md',
  'sm',
  'xs',
] satisfies FontSize[];

const weightOptions = ['thin', 'normal', 'semibold', 'bold'] satisfies TextProps['fontWeight'][];

const wrapOptions = [
  undefined,
  'balance',
  'nowrap',
  'nowrap',
  'pretty',
  'stable',
  'wrap',
] satisfies TextProps['wrap'][];

const decorationOptions = [
  'dashed',
  'dotted',
  'double',
  'line-through',
  'overline',
  'solid',
  'underline',
  'wavy',
] satisfies TextProps['decoration'][];

const meta = {
  title: 'Cat-UI/Text',
  component: Text,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    as: {
      control: 'select',
      options: asOptions,
    },
    fontSize: {
      control: 'select',
      options: sizesOptions,
    },
    fontWeight: {
      control: 'select',
      options: weightOptions,
    },
    wrap: {
      control: 'select',
      options: wrapOptions,
    },
    decoration: {
      control: 'select',
      options: decorationOptions,
    },
    color: {
      control: 'select',
      options: ['base', 'info', 'success', 'warning', 'danger', 'black', 'white'],
    },
  },
} satisfies Meta<typeof Text>;

export default meta;

export const Main: StoryFn<TextProps> = ({
  as,
  fontSize,
  fontWeight,
  wrap,
  decoration,
  color,
  children,
}) => {
  return (
    <Text
      as={as}
      wrap={wrap}
      color={color}
      fontSize={fontSize}
      fontWeight={fontWeight}
      decoration={decoration}
    >
      {children}
    </Text>
  );
};

Main.args = {
  as: 'p',
  fontSize: 'md',
  fontWeight: 'normal',
  wrap: undefined,
  decoration: undefined,
  color: 'base',
  children: 'Main Text component 🐱‍🚀',
};

export const As: StoryFn<TextProps> = ({ fontSize, fontWeight, wrap, decoration, color }) => {
  return (
    <Wrapper flexDirection="column">
      {asOptions.map((as, index) => (
        <div key={index}>
          <Text
            as={as}
            wrap={wrap}
            color={color}
            fontSize={fontSize}
            fontWeight={fontWeight}
            decoration={decoration}
            style={{ margin: 0 }}
          >
            As: {as}
          </Text>
        </div>
      ))}
    </Wrapper>
  );
};

As.args = {
  fontSize: 'md',
  fontWeight: 'normal',
  wrap: undefined,
  decoration: undefined,
  color: 'base',
};

export const FontSizes: StoryFn<TextProps> = ({ as, fontWeight, wrap, decoration, color }) => {
  return (
    <Wrapper flexDirection="column">
      {sizesOptions.map((fontSize, index) => (
        <Text
          key={index}
          as={as}
          fontSize={fontSize}
          wrap={wrap}
          color={color}
          fontWeight={fontWeight}
          decoration={decoration}
        >
          ({fontSize}) I love the cats 💜🐱‍👓!
        </Text>
      ))}
    </Wrapper>
  );
};

FontSizes.args = {
  as: 'p',
  fontWeight: 'normal',
  wrap: undefined,
  decoration: undefined,
  color: 'base',
};

export const FontWeights: StoryFn<TextProps> = ({ as, fontSize, wrap, decoration, color }) => {
  return (
    <Wrapper>
      {weightOptions.map((weight, index) => (
        <Text
          key={index}
          as={as}
          fontSize={fontSize}
          fontWeight={weight}
          wrap={wrap}
          decoration={decoration}
          color={color}
        >
          FontWeight: {weight}
        </Text>
      ))}
    </Wrapper>
  );
};

FontWeights.args = {
  as: 'p',
  fontSize: '4xl',
  wrap: undefined,
  decoration: undefined,
  color: 'base',
};

export const Wraps: StoryFn<TextProps> = ({ as, fontSize, fontWeight, decoration, color }) => {
  return (
    <Wrapper flexDirection="column">
      {wrapOptions.map((wrap, index) => (
        <div
          key={index}
          style={{
            width: 900,
            border: '1px solid var(--colors-gray-800)',
            display: 'flex',
            flexDirection: 'column',
            gap: 10,
            padding: 10,
            borderRadius: 5,
          }}
        >
          <Text fontWeight="bold">
            Wrap: {wrap} {index === 3 && 'withEllipse'}{' '}
          </Text>
          <Text
            as={as}
            fontSize={fontSize}
            fontWeight={fontWeight}
            wrap={wrap}
            decoration={decoration}
            color={color}
            withEllipse={wrap === 'nowrap' && index === 3}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione omnis velit, sequi
            voluptatem nam officia, harum, nesciunt deleniti nemo explicabo fugit? Quod distinctio
            consequuntur ipsum in! Quod ipsa perferendis qui?
          </Text>
        </div>
      ))}
    </Wrapper>
  );
};

export const Decorators: StoryFn<TextProps> = ({ as, fontSize, fontWeight, wrap, color }) => {
  return (
    <Wrapper>
      {decorationOptions.map((decoration, index) => (
        <Text
          key={index}
          as={as}
          decoration={decoration}
          fontSize={fontSize}
          fontWeight={fontWeight}
          wrap={wrap}
          color={color}
        >
          decoration: {decoration}
        </Text>
      ))}
    </Wrapper>
  );
};
