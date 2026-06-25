import type { Meta, StoryObj } from '@storybook/react';
import { IconChevronsRight } from '@tabler/icons-react';

import Component from '~/components/widgets/FAQs';
import { faqs2Home as mockData } from '~/shared/data/pages/home.data';

// More on how to set up stories at: 
const meta = {
  title: 'Widgets/FAQs',
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

export const WithBackground: Story = {
  args: {
    ...mockData,
    hasBackground: true,
  },
};

export const OneColumn: Story = {
  args: {
    ...mockData,
    columns: 1,
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
