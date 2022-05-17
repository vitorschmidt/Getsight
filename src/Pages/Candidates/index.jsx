//Styled-component imports
import { Container } from "./styles";

//Components imports
import Header from "../../Components/Header";
import ListCandidates from "../../Components/ListCandidates";

import { useCandidate } from "../../Providers/Candidates";
import { useHistory } from "react-router-dom";

const Candidates = () => {
  const { setSearch, filter } = useCandidate();
  const history = useHistory();
  const handleNavegation = (path) => history.push(path);

  const handleDual = (evt) => {
    setSearch(evt.target.value);
    filter();
  };

  return (
    <>
      {/* coloquei a header aqui da versao não logada pra testar */}
      <Header bg="#C2D8DA" height="130px" headerVersion="dashboardCandidates" />
      <Container>
        <input
          placeholder="Digite o nome"
          onChange={(evt) => handleDual(evt)}
        ></input>
        <button onClick={() => filter()}>Pesquisar</button>
        <ListCandidates />
        <button onClick={() => handleNavegation("/home")}>Home</button>
      </Container>
    </>
  );
};

export default Candidates;
