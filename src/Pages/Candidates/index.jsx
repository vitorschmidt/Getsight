//Styled-component imports
import { Container } from "./styles";

//Components imports
import Header from "../../Components/Header";
import ListCandidates from "../../Components/ListCandidates";

//Router-dom imports
import { useHistory } from "react-router-dom";

const Candidates = () => {
  const history = useHistory();
  const handleNavegation = (path) => history.push(path);
  return (
    <>
      {/* coloquei a header aqui da versao não logada pra testar */}
      <Header bg="#C2D8DA" height="130px" headerVersion="homeCandidates" />
      <Container>
        <ListCandidates />
        <button onClick={() => handleNavegation("/home")}>Home</button>
      </Container>
    </>
  );
};

export default Candidates;
