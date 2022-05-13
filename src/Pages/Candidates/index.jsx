import { useHistory } from "react-router-dom";
import ListCandidates from "../../Components/ListCandidates";

import { Container } from "./styles";
const Candidates = () => {
  const history = useHistory();
  const handleNavegation = (path) => history.push(path);
  return (
    <Container>
      <header></header>
      <ListCandidates />
      <button onClick={() => handleNavegation("/home")}>Home</button>
    </Container>
  );
};

export default Candidates;
