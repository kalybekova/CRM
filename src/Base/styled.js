import { styled } from "styled-components";

export const BlockContainer = styled.div`
  background: #fff;
  border-radius: 16px;
  padding: ${({ padding }) => padding ?? "24px 0"};
  margin-top: ${({ marginTop }) => marginTop || "0"};
  /* width: ${({ width }) => width || "max-content"}; */
`;

export const FlexBlock = styled.div`
  display: flex;

  max-width: ${({ width }) => width || "100%"};
  width: 100%;
  justify-content: ${({ justifyContent }) => justifyContent || "flex-start"};
  align-items: ${({ alighItems }) => alighItems || "flex-start"};
`;

export const GridStyled = styled.div`
  /* max-width: 300px;
  width: 100%; */
  display: grid;
  grid-template-columns: ${({ gridColumns }) => gridColumns || "auto"};
  justify-content: ${({ justifyContent }) => justifyContent || "flex-start"};
  align-items: ${({ alighItems }) => alighItems || "flex-start"};
  margin-top: ${({ marginTop }) => marginTop || "0"};
  gap: 10px;
`;
