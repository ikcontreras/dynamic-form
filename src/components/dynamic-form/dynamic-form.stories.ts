import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from 'storybook/test';

import { DynamicFormComponent } from './dynamic-form.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<DynamicFormComponent> = {
  title: 'Dynamic Form',
  component: DynamicFormComponent,
  tags: ['autodocs'],
  argTypes: {
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {},
};

export default meta;
type Story = StoryObj<DynamicFormComponent>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    section: {
      name: 'example',
      fields: [
        {
          id: 1,
          code : 'one',
          name: 'one',
        },
        {
          id: 2,
          code : 'two',
          name: 'two',
        }
      ]
    }
  },
};
