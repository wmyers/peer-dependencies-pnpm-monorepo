// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';

import { Typography } from './Typography';

export default {
    title: 'Components/Typography',
    component: Typography,
    argTypes: {
        size: {
            control: {
                type: 'radio',
                options: ['h1', 'h2', 'h3'],
            },
        },
    },
};

export const Sizes = () => (
    <div className="flex flex-col content-start space-y-2">
        <Typography size="h1">Hello world!</Typography>
        <Typography size="h2">Hello world!</Typography>
        <Typography size="h3">Hello world!</Typography>
    </div>
);
