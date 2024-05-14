import SidebarItem from "../../Atoms/SidebarItem/SidebarItem";
import { SidebarListStyled } from "./styled";

const SidebarList = ({ list = [] }) => {
  return (
    <SidebarListStyled>
      {list.map((item) => (
        <SidebarItem key={item.id} item={item} />
      ))}
    </SidebarListStyled>
  );
};

export default SidebarList;
