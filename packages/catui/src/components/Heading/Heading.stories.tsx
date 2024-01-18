import { Meta, StoryFn } from '@storybook/react';

import { Heading, HeadingProps } from '../Heading';

import { Wrapper } from '../../ui/Wrapper';

type As = HeadingProps['as'];

const asOptions = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] satisfies As[];

const sizesOptions = [
  '4xl',
  '3xl',
  '2xl',
  'xl',
  'lg',
  'md',
  'sm',
  'xs',
] satisfies HeadingProps['fontSize'][];

const weightOptions = ['thin', 'normal', 'semibold', 'bold'] satisfies HeadingProps['fontWeight'][];

const wrapOptions = [
  undefined,
  'balance',
  'nowrap',
  'nowrap',
  'pretty',
  'stable',
  'wrap',
] satisfies HeadingProps['wrap'][];

const decorationOptions = [
  'dashed',
  'dotted',
  'double',
  'line-through',
  'overline',
  'solid',
  'underline',
  'wavy',
] satisfies HeadingProps['decoration'][];

const meta = {
  title: 'Cat-UI/Heading',
  component: Heading,
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
    withEllipse: {
      control: 'boolean',
      defaultValue: false,
    },
  },
} satisfies Meta<typeof Heading>;

export default meta;

export const Main: StoryFn<HeadingProps> = ({
  as,
  fontSize,
  fontWeight,
  wrap,
  decoration,
  color,
  withEllipse,
  children,
}) => {
  return (
    <Heading
      as={as}
      wrap={wrap}
      color={color}
      fontSize={fontSize}
      fontWeight={fontWeight}
      decoration={decoration}
      withEllipse={withEllipse}
    >
      {children}
    </Heading>
  );
};

Main.args = {
  as: 'h2',
  fontSize: 'md',
  fontWeight: 'normal',
  wrap: undefined,
  decoration: undefined,
  color: 'base',
  withEllipse: false,
  children: 'Main Heading component 🐱‍🚀',
};

export const As: StoryFn<HeadingProps> = ({
  fontSize,
  fontWeight,
  wrap,
  decoration,
  color,
  withEllipse,
}) => {
  return (
    <Wrapper flexDirection="column">
      {asOptions.map((as, index) => (
        <div key={index}>
          <Heading
            as={as}
            wrap={wrap}
            color={color}
            fontSize={fontSize}
            fontWeight={fontWeight}
            decoration={decoration}
            withEllipse={withEllipse}
            style={{ margin: 0 }}
          >
            As: {as}
          </Heading>
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
  withEllipse: false,
  color: 'base',
};

export const FontSizes: StoryFn<HeadingProps> = ({
  as,
  fontWeight,
  wrap,
  decoration,
  color,
  withEllipse,
}) => {
  return (
    <Wrapper flexDirection="column">
      {sizesOptions.map((fontSize, index) => (
        <Heading
          key={index}
          as={as}
          fontSize={fontSize}
          wrap={wrap}
          color={color}
          fontWeight={fontWeight}
          decoration={decoration}
          withEllipse={withEllipse}
        >
          ({fontSize}) I love the cats 💜🐱‍👓!
        </Heading>
      ))}
    </Wrapper>
  );
};

FontSizes.args = {
  as: 'h2',
  fontWeight: 'normal',
  wrap: undefined,
  decoration: undefined,
  withEllipse: false,
  color: 'base',
};

export const FontWeights: StoryFn<HeadingProps> = ({
  as,
  fontSize,
  wrap,
  decoration,
  color,
  withEllipse,
}) => {
  return (
    <Wrapper>
      {weightOptions.map((weight, index) => (
        <Heading
          key={index}
          as={as}
          fontSize={fontSize}
          fontWeight={weight}
          wrap={wrap}
          decoration={decoration}
          color={color}
          withEllipse={withEllipse}
        >
          FontWeight: {weight}
        </Heading>
      ))}
    </Wrapper>
  );
};

FontWeights.args = {
  as: 'h2',
  fontSize: '4xl',
  wrap: undefined,
  decoration: undefined,
  color: 'base',
};

export const Wraps: StoryFn<HeadingProps> = ({ as, fontSize, fontWeight, decoration, color }) => {
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
          <Heading fontWeight="bold">
            Wrap: {wrap} {index === 3 && 'withEllipse'}{' '}
          </Heading>
          <Heading
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
          </Heading>
        </div>
      ))}
    </Wrapper>
  );
};

export const Decorators: StoryFn<HeadingProps> = ({
  as,
  fontSize,
  fontWeight,
  wrap,
  color,
  withEllipse,
}) => {
  return (
    <Wrapper>
      {decorationOptions.map((decoration, index) => (
        <Heading
          key={index}
          as={as}
          decoration={decoration}
          fontSize={fontSize}
          fontWeight={fontWeight}
          wrap={wrap}
          color={color}
          withEllipse={withEllipse}
        >
          decoration: {decoration}
        </Heading>
      ))}
    </Wrapper>
  );
};
