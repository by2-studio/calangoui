import React from 'react';
import type { Preview } from '@storybook/react';
import { CalangoUIProvider } from '../src/theme';

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#000000' },
        { name: 'light', value: '#FFFFFF' },
      ],
    },
  },
  decorators: [
    (Story) => (
      <CalangoUIProvider>
        <Story />
      </CalangoUIProvider>
    ),
  ],
};

export default preview;
