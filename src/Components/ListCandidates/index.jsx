//Styled-component imports
import { Container } from "./style";

//Components imports
import CardCandidates from "../CardCandidates";

//Providers imports
import { useCandidate } from "../../Providers/Candidates";

//Hooks imports
import { useEffect } from "react";

const ListCandidates = () => {
  const { candidate, getCandidates } = useCandidate();

  useEffect(() => {
    getCandidates();
  }, []);

  return (
    <Container>
      {candidate.map((candidate, index) => (
        <CardCandidates key={index} candidate={candidate} />
      ))}
    </Container>
  );
};

export default ListCandidates;
