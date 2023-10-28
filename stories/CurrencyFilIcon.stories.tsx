import type { Meta, StoryObj } from '@storybook/react';

import { CurrencyFilIcon } from '../src/react/Currencies';

const meta = {
  title: 'currencies/CurrencyFilIcon',
  component: CurrencyFilIcon,
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
} satisfies Meta<typeof CurrencyFilIcon>;

export default meta;

type Story = StoryObj<typeof CurrencyFilIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
