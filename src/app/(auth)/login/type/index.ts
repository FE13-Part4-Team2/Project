export default interface InputWithLabelProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  inputType: 'name' | 'email' | 'password' | 'passwordConfirm';
  onValidChange?: (isValid: boolean) => void;
  onEmptyChange?: (isEmpty: boolean) => void;
  onValueChange: (inputValue: string) => void;
}
