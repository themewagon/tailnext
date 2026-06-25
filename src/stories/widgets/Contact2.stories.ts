import type { Meta, StoryObj } from '@storybook/react';

import Component from '~/components/widgets/Contact2';
import { contact2Contact as mockData } from '~/shared/data/pages/contact.data';

// More on how to set up stories at: 
const meta = {
  title: 'Widgets/Contact2',
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
    hasBackground: false,
  },
};

export const WithBackground: Story = {
  args: {
    ...mockData,
    hasBackground: true,
  },
};

export const Mobile: Story = {
  args: {
    ...mockData,
  },
  parameters: {
    viewport: {
      defaultViewport: 'SMALL',
    },
  },
};
