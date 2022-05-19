//Styled-components import
import { useCola } from "../../Providers/Cola";
import { Container, Content } from "./style";
import { Button } from "../Button";

const CardCola = ({ cola }) => {
  const { removeCola } = useCola();
  console.log(cola);

  return (
    <Container>
      <div>
        <img src={cola.image} alt="Foto do candidato" />
      </div>
      <Content>
        <h2 className="name">{cola.name}</h2>
        <h3>{cola.cargo}</h3>
        <p>{cola.numero}</p>
      </Content>
      <Button
        backGround={"#051B03"}
        textColor={"#FFF"}
        backGroundHover={"#908c8c"}
        className="botao"
        onClick={() => removeCola(cola)}
      >
        Remover
      </Button>
    </Container>
  );
};

export default CardCola;
