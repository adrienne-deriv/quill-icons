import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedHuaweiLgIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedHuaweiLgIcon',
  component: LabelPairedHuaweiLgIcon,
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
} satisfies Meta<typeof LabelPairedHuaweiLgIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedHuaweiLgIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
