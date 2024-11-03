import React from "react";
import { InputStyled } from "./styled";

const Input = ({
  onChange,
  type = "text",
  placeholder = "",
  value = "",
  id,
}) => {
  const handler = (e) => {
    onChange(e.target.value);
  };

  return (
    <InputStyled
      id={id}
      type={type}
      onChange={handler}
      defaultValue={value}
      placeholder={placeholder}
    />
  );
};

export default Input;
