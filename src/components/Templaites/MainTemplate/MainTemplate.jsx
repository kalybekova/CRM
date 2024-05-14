import NavBar from "../../Organisms/NavBar/NavBar";
import SideBar from "../../Organisms/SideBar/SideBar";
import { MainContainer } from "./styled";

const MainTemplate = ({ children,title }) => {
  return (
    <>
      <SideBar />
      <MainContainer>
        <NavBar title={title}/>
        {children}</MainContainer>
    </>
  );
};

export default MainTemplate;
