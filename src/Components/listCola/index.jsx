//Styled-component imports
import { Container, TelaVazio } from "./style";
import vazio from "../../Assets/img/vazio.png";

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
          <TelaVazio>
            <img src={vazio} alt="vazio" />
            <h1>Sem candidatos cadastrados.</h1>
            <h2>Volte para a página de candidatos para criar sua colinha.</h2>
          </TelaVazio>
        ) : (
          cola.map((cola, index) => <CardCola key={index} cola={cola} />)
        )}
      </Container>
    </>
  );
};

export default ListCola;
