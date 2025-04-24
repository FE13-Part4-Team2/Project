export function validateName(value: string, minLength = 8) {
  return value.length <= minLength;
}

export function validateEmail(value: string) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(value);
}

export function validatePassword(value: string, minLength = 8) {
  const hasAlphabet = /[a-zA-Z]/.test(value);
  const hasNumber = /[0-9]/.test(value);
  return value.length >= minLength && hasAlphabet && hasNumber;
}

export function validatePasswordMatch(
  password: string,
  confirmPassword: string
) {
  return password === confirmPassword;
}
