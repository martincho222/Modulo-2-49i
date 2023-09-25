
export const validateEmail = {
  required: 'Email obligatorio',
  pattern: {
    value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
    message: 'No concuerda el formato de Email'
  }
}