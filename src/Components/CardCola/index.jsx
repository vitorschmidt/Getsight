import { Container } from "./style";

const CardCola= ({cola}) => {
  return (
    <>
      <Container>
        <img src={cola.image} alt="Foto do candidato" />
        <div className="informacoes">
          <div className="ocupacao">
            <p className="name">{cola.name}</p>
            <p>{cola.cargo}</p>
          </div>
          <p>{cola.numero}</p>
          <p>Partido: {cola.partido}</p>
          <p>Categoria: {cola.categoria}</p>
        </div>
        <div className="historia">
          <p>{cola.historia}</p>
        </div>
      </Container>
    </>
  );
};

export default CardCola;
