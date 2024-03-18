// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';

import type { ButtonProps } from './Button';
import { Button } from './Button';

export default {
    title: 'Components/Button',
    component: Button,
    argTypes: {
        variant: {
            control: {
                type: 'radio',
                options: ['filled', 'outlined'],
            },
        },
        color: {
            control: {
                type: 'radio',
                options: ['primary', 'secondary'],
            },
        },
        size: {
            control: {
                type: 'radio',
                options: ['sm', 'md', 'lg'],
            },
        },
    },
};

export const Colors = (args: ButtonProps) => (
    <div className="flex space-x-2">
        <Button {...args}>Primary</Button>
        <Button {...args} color="secondary">
            Secondary
        </Button>
    </div>
);

Colors.args = {
    variant: 'filled',
    size: 'md',
};

export const Variants = (args: ButtonProps) => (
    <div className="flex space-x-2">
        <Button {...args} variant="outlined">
            Outlined
        </Button>
        <Button {...args} variant="filled">
            Filled
        </Button>
    </div>
);

Variants.args = {
    variant: 'filled',
    size: 'md',
};
