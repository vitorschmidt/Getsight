import { Container } from "./style";
import { useCandidate } from "../../../Providers/Candidates";
import { useEffect } from "react";
import CardCandidates from "../CardCandidates";

const ListCandidates = () => {
  const { candidate, getCandidates } = useCandidate();

  useEffect(() => {
    getCandidates();
  }, []);

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
