//Styled-component imports
import { Container } from "./styles";

//Components imports
import Header from "../../Components/Header";
import ListCandidates from "../../Components/ListCandidates";

const Candidates = () => {
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
