import { BackArrow } from "../../../assets/Icons";
import Logo from "../../Atoms/Logo/Logo";
import SidebarList from "../../Molecules/SidebarList/SidebarList";
import { MAIN_LIST, OTHER_LIST, SALES_LIST } from "./Const";
import {
  SidebarBack,
  SidebarBlock,
  SidebarFooter,
  SidebarHead,
  SidebarStyled,
  SidebarTitle,
} from "./styled";

const SideBar = () => {
  return (
    <SidebarStyled>
      <SidebarHead>
        <SidebarBlock>
          <Logo />
          <SidebarBack>
            <BackArrow />
          </SidebarBack>
        </SidebarBlock>
        <SidebarBlock>
          <SidebarTitle>Menu</SidebarTitle>
          <SidebarList list={MAIN_LIST} />
        </SidebarBlock>
      </SidebarHead>
      <SidebarBlock>
        <SidebarTitle>Sales</SidebarTitle>
        <SidebarList list={SALES_LIST} />
      </SidebarBlock>
      <SidebarFooter>
        <SidebarBlock>
          <SidebarList list={OTHER_LIST} />
        </SidebarBlock>
      </SidebarFooter>
    </SidebarStyled>
  );
};

export default SideBar;
