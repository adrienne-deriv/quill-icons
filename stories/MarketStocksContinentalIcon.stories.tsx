import type { Meta, StoryObj } from '@storybook/react';

import { MarketStocksContinentalIcon } from '../src/react/Markets';

const meta = {
  title: 'markets/MarketStocksContinentalIcon',
  component: MarketStocksContinentalIcon,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    fill: { control: { type: 'color' } },
    iconSize: {
      control: {
        type: 'radio',
      },
      options: ['sm', 'md', 'lg', 'xl', '2xl'],
      defaultValue: 'md',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof MarketStocksContinentalIcon>;

export default meta;

type Story = StoryObj<typeof MarketStocksContinentalIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
