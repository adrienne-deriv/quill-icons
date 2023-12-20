import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedCircleTrashSmBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedCircleTrashSmBoldIcon',
  component: LabelPairedCircleTrashSmBoldIcon,
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
} satisfies Meta<typeof LabelPairedCircleTrashSmBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedCircleTrashSmBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
