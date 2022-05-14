import { useHistory } from "react-router-dom";
import Header from "../../Components/Header";
import ListCandidates from "../../Components/ListCandidates";
import { useCandidate } from "../../Providers/Candidates";
import { Container } from "./styles";

const Candidates = () => {
  const { filteredCandidates, setFilteredCandidates, filter, setValue } =
    useCandidate();
  const history = useHistory();
  const handleNavegation = (path) => history.push(path);
  return (
    <>
      {/* coloquei a header aqui da versao não logada pra testar */}
      <Header bg="#C2D8DA" height="130px" headerVersion="homeCandidates" />
      <Container>
        <input
          placeholder="Digite o nome"
          onChange={(evt) => setFilteredCandidates(evt.target.value)}
        ></input>
        <button onClick={() => filter()}>Pesquisar</button>
        <ListCandidates />
        <button onClick={() => handleNavegation("/home")}>Home</button>
      </Container>
    </>
  );
};

export default Candidates;
