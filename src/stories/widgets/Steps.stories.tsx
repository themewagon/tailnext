import type { Meta, StoryObj } from '@storybook/react';
import { Title, Subtitle, Description, Primary, Controls, Story, Stories } from '@storybook/blocks';

import Component from '~/components/widgets/Steps';
import { stepsHome as mockData } from '~/shared/data/pages/home.data';

// More on how to set up stories at: 
const meta = {
  title: 'Widgets/Steps',
  component: Component,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: 
    layout: 'fullscreen',
    // Offers several doc blocks to help document your components. More info: https://storybook.js.org/docs/writing-docs/doc-blocks
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          <Primary />
          <Controls exclude={['id', 'header']} />
          <Stories includePrimary={false} title={'Stories'} />
        </>
      ),
    },
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

export const Reverse: Story = {
  args: {
    ...mockData,
    isReversed: true,
  },
};

export const NoImage: Story = {
  args: {
    ...mockData,
    isImageDisplayed: false,
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
