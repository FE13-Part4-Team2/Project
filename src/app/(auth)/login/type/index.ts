export interface InputWithLabelProps {
  inputType: InputType;
  errorMessage: string;
  onInputBlur: (
    key: InputType
  ) => (e: React.ChangeEvent<HTMLInputElement>) => void;
  onInputChange: (
    key: InputType
  ) => (e: React.ChangeEvent<HTMLInputElement>) => void;
}
// type
export type InputType = 'email' | 'password';
export type FormFieldTypeType = 'email' | 'password';
