import Header from "../../Components/Header";
import ListCola from "../../Components/listCola";
import { Button } from "../../Components/Button";
import { Container } from "./styles";

const Cola = () => {
  return (
    <Container>
      <Header bg="#C2D8DA" height="130px" headerVersion="cola"></Header>
      <ListCola />
      <Button
        width="100%"
        maxWidth="200px"
        height="40px"
        backGround="#051B03"
        textColor="#fff"
        borderRadius="8px"
      >
        Gerar Cola
      </Button>
    </Container>
  );
};

export default Cola;
