import { Container } from "./style";

import { useEffect } from "react";
import CardCola from "../CardCola";
import { useCola } from "../../Providers/Cola";

const ListCola = () => {
  const { cola, getColas } = useCola();

  useEffect(() => {
    getColas();
  }, [getColas]);

  return (
    <Container>
      {cola.map((cola, index) => (
        <CardCola key={index} cola={cola} />
      ))}
    </Container>
  );
};

export default ListCola;
