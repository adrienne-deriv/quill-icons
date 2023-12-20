import type { Meta, StoryObj } from '@storybook/react';

import { MarketStocksCitigroupIcon } from '../src/react/Markets';

const meta = {
  title: 'markets/MarketStocksCitigroupIcon',
  component: MarketStocksCitigroupIcon,
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
} satisfies Meta<typeof MarketStocksCitigroupIcon>;

export default meta;

type Story = StoryObj<typeof MarketStocksCitigroupIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
