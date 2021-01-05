// Validation function
export interface Validatable {
  value: string | number;
  required: boolean;
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
}

export function validate(validateInput: Validatable) {
  const { value } = validateInput;
  let isValid = true;
  if (validateInput.required) {
    isValid = isValid && value.toString().trim().length !== 0;
  }
  if (validateInput.minLength != null && typeof value === 'string') {
    isValid = isValid && value.length >= validateInput.minLength;
  }
  if (validateInput.maxLength != null && typeof value === 'string') {
    isValid = isValid && value.length <= validateInput.maxLength;
  }
  if (validateInput.min != null && typeof value === 'number') {
    isValid = isValid && value >= validateInput.min;
  }
  if (validateInput.max != null && typeof value === 'number') {
    isValid = isValid && value <= validateInput.max;
  }

  return isValid;
}
