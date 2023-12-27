import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedBellSlashLgBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedBellSlashLgBoldIcon',
  component: LabelPairedBellSlashLgBoldIcon,
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
} satisfies Meta<typeof LabelPairedBellSlashLgBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedBellSlashLgBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
