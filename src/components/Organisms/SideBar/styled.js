import { styled } from "styled-components";

export const SidebarStyled = styled.div`
  min-height: 100vh;
  max-width: 256px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  background: #fff;
  border-right: 2px solid #f1f2f4;
`;

export const SidebarHead = styled.div`
  border-bottom: 2px solid #f1f2f4;
`;

export const SidebarFooter = styled.div``;

export const SidebarBlock = styled.div`
  margin-top: 24px;
  padding: 0 24px;
`;

export const SidebarTitle = styled.div`
  font-size: 15px;
  font-weight: 500;
  line-height: 19.2px;
  text-align: left;
  color: #a0aec0;
`;

export const SidebarBack = styled.div`
  border: 1px solid #f1f2f4;
  width: 32px;
  height: 32px;
  position: absolute;
  background: #fff;
  top: 30px;
  left: 239px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
