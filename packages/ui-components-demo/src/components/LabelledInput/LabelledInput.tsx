import { LabelledInputProps } from "./LabelledInput.types";

export const LabelledInput = ({inputType, children}:LabelledInputProps) => <div>
  <label>{`This is a labelled input: ${children}`}<input type={inputType} /></label>
</div>