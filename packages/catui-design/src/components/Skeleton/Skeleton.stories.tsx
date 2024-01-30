import { Meta, StoryFn } from '@storybook/react';

import { Skeleton, SkeletonProps } from '.';
import { Button } from '../Button';

const meta = {
  title: 'Cat-UI/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
  argTypes: {
    h: { control: 'number' },
    w: { control: 'number' },
    isRound: { control: 'boolean', defaultValue: false },
  },
} satisfies Meta<typeof Skeleton>;

export default meta;

export const Main: StoryFn<SkeletonProps> = ({ w, h, isRound }) => {
  return <Skeleton w={w} h={h} isRound={isRound} />;
};

Main.args = {
  w: 100,
  h: 100,
  isRound: false,
};

export const LoadingLoginSkeleton: StoryFn<SkeletonProps> = () => {
  return (
    <main style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <header
        style={{
          width: '90%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 10,
          borderBottom: '1px solid rgba(0, 0, 0, 0.5)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <img src="/catui-v2.png" width={50} />
          <Skeleton w={200} h={30} />
        </div>
        <nav>
          <ul style={{ margin: 0, display: 'flex', alignItems: 'center', gap: 10 }}>
            <li style={{ listStyle: 'none' }}>
              <Button variant="outline" size="sm" role="info">
                Profile
              </Button>
            </li>
            <li style={{ listStyle: 'none' }}>
              <Button variant="ghost" size="sm" role="danger">
                Logout
              </Button>
            </li>
            <li style={{ listStyle: 'none' }}>
              <Skeleton isRound w={40} h={40} />
            </li>
          </ul>
        </nav>
      </header>
      <section style={{ width: '90%', display: 'flex', gap: 10, paddingTop: 10 }}>
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 10 }}>
          <Skeleton w="100%" h={100} />
          <Skeleton w="100%" h={100} />
        </div>
        <Skeleton w="30%" />
      </section>
    </main>
  );
};
