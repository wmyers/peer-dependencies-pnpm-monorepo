import { type ReactNode } from 'react';

enum Input {
  TextInput = 'text',
  ButtonInput = 'button',
  RadioInput = 'radio'
}

type InputType = `${Input}`;

export type LabelledInputProps = {
  inputType: InputType;
  children: ReactNode;
}
