import React from "react";
import {
  ChecboxInput,
  ChecboxRadio,
  CheckboxContainer,
  CheckboxLabel,
} from "./styled";
import { CheckIcon } from "../../../assets/Icons";

const Checkbox = ({ id }) => {
  return (
    <CheckboxContainer>
      <ChecboxInput id={id} type="checkbox" />
      <CheckboxLabel htmlFor={id}>
        <ChecboxRadio>
          <CheckIcon />
        </ChecboxRadio>
      </CheckboxLabel>
    </CheckboxContainer>
  );
};

export default Checkbox;
