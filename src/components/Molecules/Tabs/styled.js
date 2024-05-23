import { css, styled } from "styled-components";

export const TabsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 0 24px;
  padding-bottom: 6px;
  border-bottom: 1px solid #eeeff2;
`;

export const TabsStyled = styled.div`
  color: #718096;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0.20000000298023224px;
  text-align: left;
  cursor: pointer;
  position: relative;
  padding: 0 8px;

  ${(props) =>
    props.active === "true" &&
    css`
      color: #0caf60;
      font-weight: 700;

      &:after {
        position: absolute;
        content: "";
        width: 100%;
        height: 2px;
        background-color: #0caf60;
        bottom: -7.5px;
        left: 0;
      }
    `}
`;
