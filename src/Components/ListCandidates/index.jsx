//Styled-component imports
import { Container } from "./style";

import CardCandidates from "../CardCandidates";

//Providers imports
import { useCandidate } from "../../Providers/Candidates";
import { hasUnreliableEmptyValue } from "@testing-library/user-event/dist/utils";

//Hooks imports
import { useEffect } from "react";

const ListCandidates = () => {
  const { candidate, filteredCandidates, value } = useCandidate();

  console.log(value);

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
