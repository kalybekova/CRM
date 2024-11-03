import React from "react";
import {
  ChecboxInput,
  ChecboxRadio,
  CheckboxContainer,
  CheckboxLabel,
} from "./styled";
import { CheckIcon } from "../../../assets/Icons";

const Checkbox = ({ item, handler }) => {
  return (
    <CheckboxContainer>
      <ChecboxInput
        id={item?.id}
        checked={item?.checked}
        type="checkbox"
        onChange={(e) => {
          handler(item.id, e.target.checked);
        }}
      />
      <CheckboxLabel htmlFor={item?.id}>
        <ChecboxRadio>
          <CheckIcon />
        </ChecboxRadio>
      </CheckboxLabel>
    </CheckboxContainer>
  );
};

export default Checkbox;
