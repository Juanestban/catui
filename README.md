# CatUI Design System

## Getting Started

tutorial

```bash
npx install catui
```

```bash
yarn add catui
```

```bash
pnpm add catui
```

## Storybook

two way options for create a component, using component for export or just exporting an object type `Story`

- tsx

```tsx
import { Skeleton } from 'Skeleton';

export const Main = ({ size }) => {
  return <Skeleton size={size} />;
};

Main.args = {
  /** props */
  size: 'lg',
};
```

- simple

```tsx
import type { Meta, StoryObj } from '@storybook/react';

import { Skeleton } from 'Skeleton';

const meta = {
  title: 'Example/Skeleton',
  component: Skeleton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    /** args Types */
  },
} satisfies Meta<typeof Skeleton>;

type Story = StoryObj<typeof meta>;

export const Main: Story = {
  args: {
    variant: 'normal',
    size: 'md',
    role: 'info',
    children: 'Main Skeleton',
  },
};
```
