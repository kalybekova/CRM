import HeaderLogo from "../../../assets/Icons/HeaderLogo";
import { LogoStyled } from "./styled";

const Logo = () => {
  return (
    <LogoStyled to={'/'}>
      <HeaderLogo />
    </LogoStyled>
  );
};

export default Logo;
