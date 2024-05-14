import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

export const LinksStyled = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-top: 16px;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0.20000000298023224px;
  text-align: left;
  color: #a0aec0;
  text-decoration: none;

  &.active {
    color: #0caf60;

    svg {
      path {
        fill: #0caf60;
      }
    }
  }

  &:hover {
    color: #0caf60;
    svg {
      path {
        fill: #0caf60;
      }
    }
  }
`;
