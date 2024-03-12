import { useCallback } from "react";
import { Button } from "./Button";
import { AlertButtonProps } from "./Button.types";
export const AlertButton = (
  (
    {
      children,
      alertMessage
    }: AlertButtonProps
  ) => {
    const onClick = useCallback(() => {
      window?.alert(alertMessage);
    }, []);
    return <Button onClick={onClick}>{`This is an AlertButton: ${children}`}</Button>
  }
)