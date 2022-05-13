import { Container } from "./style";

import { useEffect } from "react";
import CardCandidates from "../CardCandidates";
import { useCandidate } from "../../Providers/Candidates";

const ListCandidates = () => {
  const { candidate, getCandidates } = useCandidate();

  useEffect(() => {
    getCandidates();
  }, [getCandidates]);

  console.log(candidate);

  return (
    <Container>
      {candidate.map((candidate, index) => (
        <CardCandidates key={index} candidate={candidate} />
      ))}
    </Container>
  );
};

export default ListCandidates;
