import React from "react";
import { TabsContainer, TabsStyled } from "./styled";
import { useState } from "react";

const Tabs = ({ list, setTab }) => {
  return (
    <TabsContainer>
      {list.map((item) => (
        <TabsStyled
          key={item.id}
          active={item.active ? "true" : "false"}
          onClick={() => setTab(item.id)}
        >
          {item.label}
        </TabsStyled>
      ))}
    </TabsContainer>
  );
};

export default Tabs;
