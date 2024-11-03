import { useState } from "react";

export const useInput = (intialValue, validator) => {
  const [value, setValue] = useState(intialValue);
  const [error, setError] = useState(false);

  const handleChange = (value) => {
    setValue(value);
  };

  const validate = () => {
    setError(!validator(value));
    return validator(value);
  };

  return {
    value,
    error,
    handleChange,
    validate,
  };
};
