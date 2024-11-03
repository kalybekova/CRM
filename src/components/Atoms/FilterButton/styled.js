import { styled } from "styled-components";

export const FilterButtonStyled = styled.div`
  background: rgba(250, 250, 250, 1);
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px;
  cursor: pointer;
  border-radius: 12px;
  box-sizing: border-box;
  max-width: max-content;
  height: 56px;
`;

export const FilterButtonIcon = styled.div`
  svg {
    path {
      stroke: ${({ active }) =>
        active === "true" ? "rgba(12, 175, 96, 1)" : "rgba(113, 128, 150, 1)"};
    }
  }
`;

export const FilterButtonText = styled.div`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0.20000000298023224px;
  text-align: left;
  color: ${({ active }) =>
    active === "true" ? "rgba(12, 175, 96, 1)" : "rgba(113, 128, 150, 1)"};
`;
