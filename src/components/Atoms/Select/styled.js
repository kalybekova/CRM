import { styled } from "styled-components";

export const SelectStyled = styled.div`
  position: relative;

  /* max-width: ${({ maxWidth }) => maxWidth || '248px'}; */
  max-width: 248px;
  width: 100%;
`;

export const SelectContent = styled.div`
  height: 56px;
  cursor: pointer;
  border-radius: 12px;
  padding: 8px 16px;
  background: #fafafa;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SelectOptions = styled.div`
  position: absolute;
  top: calc(100%+5px);
  left: 0px;
  background-color: #fafafa;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 500;
  text-align: left;
  color: rgb(17, 24, 39, 1);
  overflow: hidden;
  z-index: 5;
  /* max-width: 248px;
  width: 100%; */
`;

export const SelectOption = styled.div`
  cursor: pointer;
  margin-top: 3px;
  padding: 8px 16px;
  transition: all 0.3s;

  &-first-child {
    margin: 0px;
  }

  &:hover {
    background-color: rgb(0, 0, 0, 0.3);
    color: white;
  }
`;

export const SelectValue = styled.div`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0.20000000298023224px;
  text-align: left;
  color: ${({ active }) =>
    active === "null" ? "#a0aec0" : "rgb(17, 24, 39, 1)"};
`;

export const SelectIcon = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const SelectClear = styled.div`
  /* width: max-content; */
`;

export const SelectDiv = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
  gap: 10px;
`;

export const SelectDivTitle = styled.div`
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0.30000001192092896px;
  text-align: left;
  color: rgba(17, 24, 39, 1);
`;
