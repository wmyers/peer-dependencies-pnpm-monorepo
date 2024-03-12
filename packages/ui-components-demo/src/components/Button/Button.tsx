import { ButtonProps } from "./Button.types";
export const Button = (
  (
    {
      children,
      onClick
    }: ButtonProps
  ) =>
      <button style={{borderRadius: 50}} onClick={onClick}>
        {children}
      </button>
)
