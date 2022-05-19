import { Container } from "./style";

import CardCandidates from "../CardCandidates";

import { useCandidate } from "../../Providers/Candidates";

const ListCandidates = () => {
  const { candidate, filteredCandidates, value } = useCandidate();

  return (
    <Container>
      {value === false
        ? candidate.map((candidate, index) => (
            <CardCandidates key={index} candidate={candidate} />
          ))
        : filteredCandidates.map((candidate, index) => (
            <CardCandidates key={index} candidate={candidate} />
          ))}
    </Container>
  );
};

export default ListCandidates;
