import { useCallback } from 'react';

import { Button } from './Button';
import type { AlertButtonProps } from './Button.types';
export const AlertButton = ({ children, alertMessage }: AlertButtonProps) => {
    const onClick = useCallback(() => {
        window?.alert(alertMessage);
    }, [alertMessage]);
    return <Button onClick={onClick}>{`This is an AlertButton: ${children}`}</Button>;
};
