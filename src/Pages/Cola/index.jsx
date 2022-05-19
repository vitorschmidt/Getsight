//Styled-component imports
import { Container } from "./styles";

//Components imports
import Header from "../../Components/Header";
import ListCola from "../../Components/listCola";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Cola = ({authenticated}) => { 
  const history = useHistory()

  if(authenticated === false){

    history.push("/login")
  }
  
  return (
    <Container>
      
      <Header bg="#C2D8DA" height="130px" headerVersion="cola"></Header>
      <ListCola />
    </Container>
  );
};

export default Cola;
