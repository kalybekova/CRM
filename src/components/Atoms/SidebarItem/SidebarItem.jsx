import { LinksStyled } from "./styled";

const SidebarItem = ({ item }) => {
  const { label, icon: Icon, to } = item;
  return (
    <LinksStyled to={to}>
      <span>{Icon && <Icon />}</span>
      <span>{label}</span>
    </LinksStyled>
  );
};

export default SidebarItem;
