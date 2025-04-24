export function validateEmail(value: string) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(value);
}

export function validatePassword(value: string, minLength = 8) {
  return value.length >= minLength;
}

export function validatePasswordMatch(
  password: string,
  confirmPassword: string
) {
  return password === confirmPassword;
}
