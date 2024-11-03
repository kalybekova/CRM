import ProfilePreview from "../../Molecules/ProfilePreview/ProfilePreview";
import {
  NavbarIconsStyled,
  NavbarLeft,
  NavbarRight,
  NavbarStyled,
  NavBarTitleStyled,
} from "./styled";

import MailIcon from "../../../assets/Icons/MailIcon";
import BellIcon from "../../../assets/Icons/BellIcon";
import { useNavigate } from "react-router-dom";

const NavBar = ({ title }) => {


  
  return (
    <NavbarStyled>
      <NavbarLeft>
        <NavBarTitleStyled>{title}</NavBarTitleStyled>
      </NavbarLeft>
      <NavbarRight>
        <NavbarIconsStyled>
          <MailIcon />
          <BellIcon />
        </NavbarIconsStyled>
        <ProfilePreview  />
      </NavbarRight>
    </NavbarStyled>
  );
};

export default NavBar;
