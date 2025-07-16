import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from 'storybook/test';

import { ImplementationComponent } from './implementation.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<ImplementationComponent> = {
  title: 'Implementation Form',
  component: ImplementationComponent,
  tags: ['autodocs'],
  argTypes: {
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {},
};

export default meta;
type Story = StoryObj<ImplementationComponent>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {},
};
