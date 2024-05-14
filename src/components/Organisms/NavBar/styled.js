import { styled } from "styled-components";

export const NavbarStyled = styled.div`
  width: 100%;
  height: 96px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 23px 48px;
  background: #ffffff;
  border-bottom: 2px solid #f1f2f4;
`;

export const NavBarTitleStyled = styled.h1`
  font-size: 24px;
  font-weight: 700;
  line-height: 31.2px;
  text-align: left;
  color: #111827;
`;

export const NavbarLeft = styled.div``;

export const NavbarRight = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  /* max-width: 260px;
  width: 100%; */
`;

export const NavbarIconsStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;
