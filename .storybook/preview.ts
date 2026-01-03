// eslint-disable-next-line no-restricted-imports
import '../src/styles/base.css';

import type { Preview } from '@storybook/react-vite';
const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
