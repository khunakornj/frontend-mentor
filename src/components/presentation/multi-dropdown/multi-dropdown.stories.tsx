import type { Meta, StoryObj } from '@storybook/react-vite';

import MultiDropdown from './multi-dropdown';

const meta: Meta<typeof MultiDropdown> = {
  title: 'Components/Presentation/MultiDropdown',
  component: MultiDropdown,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof MultiDropdown>;

export const Default: Story = {
  args: {
    itemControl: {
      label: 'Switch to imperial',
    },
    items: [
      {
        label: 'Celsius (°C)',
        value: 'celcius',
        group: 'Temperature',
        disabled: true,
      },
      {
        label: 'Fahrenheit (°F)',
        value: 'farenheit',
        group: 'Temperature',
        disabled: true,
      },
      { label: 'km/h', value: 'vue', group: 'Wind Speed', disabled: true },
      { label: 'mph', value: 'panda', group: 'Wind Speed', disabled: true },
      {
        label: 'Millimeters (mm)',
        value: 'mm',
        group: 'Precipitation',
        disabled: true,
      },
      {
        label: 'Inches (in)',
        value: 'inch',
        group: 'Precipitation',
        disabled: true,
      },
    ],
  },
};
