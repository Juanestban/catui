import { Meta, StoryFn } from '@storybook/react';

import { Image, ImageProps } from '../Image';
import { Heading } from '../Heading';

const meta = {
  title: 'Cat-UI/Image',
  component: Image,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    fit: { control: 'select', options: ['contain', 'fill', 'cover'] },
    aspect: { control: 'select', options: ['auto', '16/9', '1/1'] },
    src: { control: 'text' },
    alt: { control: 'text', defaultValue: 'description alt cat image' },
    withBlur: { control: 'boolean', defaultValue: false },
    withBorder: { control: 'boolean', defaultValue: false },
    unselect: { control: 'boolean', defaultValue: false },
  },
} satisfies Meta<typeof Image>;

export default meta;

export const Main: StoryFn<ImageProps> = ({
  src,
  alt,
  width,
  fit,
  aspect,
  withBorder,
  withBlur,
  unselect,
}) => {
  return (
    <>
      <Image
        src={src}
        fit={fit}
        width={width}
        aspect={aspect}
        alt={alt}
        withBorder={withBorder}
        withBlur={withBlur}
        unselect={unselect}
      />
      <Heading as="h1" style={{ marginTop: 10 }}>
        Kittens
      </Heading>
    </>
  );
};

Main.args = {
  fit: 'cover',
  aspect: '16/9',
  width: 400,
  withBlur: false,
  withBorder: true,
  unselect: false,
  src: 'https://d.newsweek.com/en/full/2224211/kittens-basket.jpg?w=1600&h=1600&q=88&f=f357dc4ddd678b603551c533366a56ae',
};
