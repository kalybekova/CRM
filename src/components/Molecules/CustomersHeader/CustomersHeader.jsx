import React from "react";
import { FlexBlock } from "../../../Base/styled";
import Button from "../../Atoms/Button/Button";

const CustomersHeader = ({ showModal }) => {
  return (
    <FlexBlock justifyContent="space-between" alighItems="center">
      <FlexBlock>
        <span>show:All customers</span>
      </FlexBlock>
      <FlexBlock width="135px">
        <Button handler={() => showModal()}>Add Customer</Button>
      </FlexBlock>
    </FlexBlock>
  );
};

export default CustomersHeader;
