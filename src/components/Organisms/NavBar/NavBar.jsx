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
        <ProfilePreview />
      </NavbarRight>
    </NavbarStyled>
  );
};

export default NavBar;
