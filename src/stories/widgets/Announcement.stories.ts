import type { Meta, StoryObj } from '@storybook/react';

import Component from '~/components/widgets/Announcement';
import { announcementData as mockData } from '~/shared/data/global.data';

// More on how to set up stories at: 
const meta = {
  title: 'Widgets/Announcement',
  component: Component,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: 
    layout: 'fullscreen',
  },
  // This component will have an automatically generated Autodocs entry: 
  tags: ['autodocs'],
  // More on argTypes: 
  argTypes: {},
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: 
export const Base: Story = {
  args: {
    ...mockData,
  },
};
