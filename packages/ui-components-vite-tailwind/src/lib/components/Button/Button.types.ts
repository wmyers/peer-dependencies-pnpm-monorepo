import { type MouseEventHandler, type ReactNode } from 'react';

export type ButtonProps = {
    children: ReactNode;
    onClick?: MouseEventHandler<HTMLButtonElement>;
};

export type AlertButtonProps = {
    children: ReactNode;
    alertMessage: string;
};
