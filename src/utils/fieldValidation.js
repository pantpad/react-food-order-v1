export function nameValidation(value) {
  // Regular expression to match only letters and spaces
  const onlyLettersAndSpaces = /^[a-zA-Z\s]+$/;

  // Test the input against the regular expression
  if (!onlyLettersAndSpaces.test(value))
    return "Field should contain only letters and spaces";

  if (value.length < 2) return "Field should be at least 2 chars long";
  if (value.length > 24) return "Field should be maximum 24 chars long";

  return null;
}

export function emailValidation(value) {
  const basicPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!value.includes("@")) {
    return "This field doesn't contain the @ symbol";
  }

  if (value.length < 5) return "This field should be atleast 5 chars long";

  if (!basicPattern.test(value)) {
    return "This email is not valid!";
  }

  return null;
}

export function streetValidation(value) {
  if (value.length < 5) return "This field should be atleast 5 chars long";
  return null;
}

export let validateMap = {
  fullName: (v) => {
    return nameValidation(v);
  },
  email: (v) => {
    return emailValidation(v);
  },
  street: (v) => {
    return streetValidation(v);
  },
  ["postal-code"]: (v) => {
    return streetValidation(v);
  },
  city: (v) => {
    return streetValidation(v);
  },
};
