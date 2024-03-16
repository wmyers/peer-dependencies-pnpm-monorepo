import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

const meta = {
    title: 'Example/Button',
    component: Button,
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'fullscreen',
    },
} as Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ExampleButton: Story = {
    args: {
        children: 'Click me',
        onClick: () => {},
    },
};
