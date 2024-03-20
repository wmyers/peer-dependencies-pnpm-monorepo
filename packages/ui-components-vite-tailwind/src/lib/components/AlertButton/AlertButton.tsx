import { useCallback } from 'react';

import { Button, type ButtonProps } from '../Button/Button';

export type AlertButtonProps = {
    alertMessage: string;
} & ButtonProps;

export const AlertButton = ({ alertMessage, ...props }: AlertButtonProps) => {
    const onClick = useCallback(() => {
        window?.alert(alertMessage);
    }, [alertMessage]);
    return <Button onClick={onClick} {...props} />;
};
