//Styled-component imports
import { Container } from "./style";

//Components imports
import CardCola from "../CardCola";

//Providers imports
import { useCola } from "../../Providers/Cola";

//Hooks imports
import { useEffect } from "react";

const ListCola = () => {
  const { cola } = useCola();
  // console.log(cola);

  return (
    <Container>
      {cola.map((cola, index) => (
        <CardCola key={index} cola={cola} />
      ))}
    </Container>
  );
};

export default ListCola;
