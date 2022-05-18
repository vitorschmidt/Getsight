//Styled-component imports
import { Container } from "./styles";

//Components imports
import Header from "../../Components/Header";
import ListCandidates from "../../Components/ListCandidates";

// import { useHistory } from "react-router-dom";

const Candidates = () => {
  // const history = useHistory();
  // const handleNavegation = (path) => history.push(path);

  return (
    <>
      {/* coloquei a header aqui da versao não logada pra testar */}
      <Header bg="#C2D8DA" headerVersion="dashboardCandidates" />
      <Container>
        <ListCandidates />
      </Container>
    </>
  );
};

export default Candidates;
