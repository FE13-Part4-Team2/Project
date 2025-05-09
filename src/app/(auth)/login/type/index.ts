export interface InputWithLabelProps {
  inputType: InputType;
  errorMessage: string[] | undefined;
  onInputBlur: (
    key: InputType
  ) => (e: React.ChangeEvent<HTMLInputElement>) => void;
  onInputChange: (
    key: InputType
  ) => (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export type InputType = 'email' | 'password';
