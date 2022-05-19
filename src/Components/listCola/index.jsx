import { Container } from "./style";

import CardCola from "../CardCola";

import { useCola } from "../../Providers/Cola";

import { useEffect } from "react";

const ListCola = () => {
  const { cola } = useCola();
  

  return (
    <Container>
      {cola.map((cola, index) => (
        <CardCola key={index} cola={cola} />
      ))}
    </Container>
  );
};

export default ListCola;
