//Styled-components import
import { Container, Content } from "./style";

const CardCola = ({ cola }) => {
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
    </Container>
  );
};

export default CardCola;
