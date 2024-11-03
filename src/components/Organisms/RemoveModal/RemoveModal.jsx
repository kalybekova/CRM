import React from "react";
import ModalTemplate from "../../Templaites/ModalTemplate/ModalTemplate";
import Button from "../../Atoms/Button/Button";
import { Buttons, Text } from "./styled";

export default function RemoveModal({ closeHandler, submitHandler }) {
  return (
    <ModalTemplate title="Remove" width="420px" closeHandler={closeHandler}>
      <Text>Do you want remove this item/items?</Text>
      <Buttons>
        <Button handler={closeHandler} type="transparent-dark">
          Cancel
        </Button>
        <Button handler={submitHandler}>Remove</Button>
      </Buttons>
    </ModalTemplate>
  );
}
