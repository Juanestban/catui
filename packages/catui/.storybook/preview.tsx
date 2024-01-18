import React from 'react';
import type { Preview } from '@storybook/react';

import { Button, CatuiTheme, Text, useTheme } from '../src/components';

const InfoTheme = () => {
  const { theme, handleTheme } = useTheme();

  return (
    <>
      <span style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 20 }}>
        <Text>current theme: {theme}</Text>
        <Button size="xs" onClick={handleTheme}>
          change theme
        </Button>
      </span>
    </>
  );
};

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <CatuiTheme>
        <InfoTheme />
        <Story />
      </CatuiTheme>
    ),
  ],
};

export default preview;
