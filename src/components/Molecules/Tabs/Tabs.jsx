import React from "react";
import { TabsContainer, TabsStyled } from "./styled";

export default function Tabs({ list, setTab }) {
  return (
    <TabsContainer>
      {list?.map((item) => (
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
}
