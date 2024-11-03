import { BlockContainer } from "../../../Base/styled";
import NavBar from "../../Organisms/NavBar/NavBar";
import SideBar from "../../Organisms/SideBar/SideBar";
import { Container, MainContainer } from "./styled";

const MainTemplate = ({ children, title }) => {
  return (
    <>
      <SideBar />
      <MainContainer>
        <NavBar title={title} />
        <Container>{children}</Container>
      </MainContainer>
    </>
  );
};

export default MainTemplate;
