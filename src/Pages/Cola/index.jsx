//Styled-component imports
import { Container } from "./styles";

//Components imports
import Header from "../../Components/Header";
import ListCola from "../../Components/listCola";
import { Button } from "../../Components/Button";

const Cola = () => {
  return (
    <Container>
      <Header bg="#C2D8DA" height="130px" headerVersion="cola"></Header>
      <ListCola />
    </Container>
  );
};

export default Cola;
