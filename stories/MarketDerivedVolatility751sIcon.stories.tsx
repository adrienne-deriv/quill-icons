import type { Meta, StoryObj } from '@storybook/react';

import { MarketDerivedVolatility751sIcon } from '../src/react/Markets';

const meta = {
  title: 'markets/MarketDerivedVolatility751sIcon',
  component: MarketDerivedVolatility751sIcon,
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
} satisfies Meta<typeof MarketDerivedVolatility751sIcon>;

export default meta;

type Story = StoryObj<typeof MarketDerivedVolatility751sIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
