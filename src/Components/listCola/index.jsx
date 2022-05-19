//Styled-component imports
import { Container } from "./style";

//Components imports
import CardCola from "../CardCola";

//Providers imports
import { useCola } from "../../Providers/Cola";

//Hooks imports

const ListCola = () => {
  const { cola, removeCola } = useCola();

  return (
    <>
      <Container>
        {cola.length === 0 ? (
          <h1>Volte para a página de candidatos para criar sua colinha.</h1>
        ) : (
          cola.map((cola, index) => <CardCola key={index} cola={cola} />)
        )}
      </Container>
    </>
  );
};

export default ListCola;
