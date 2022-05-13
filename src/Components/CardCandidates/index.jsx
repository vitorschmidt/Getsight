import { Button } from "../Button";
import { Container } from "./style";

const CardCandidates = ({ candidate }) => {
  return (
    <>
      <Container>
        <img src={candidate.image} alt="Foto do candidato" />
        <div className="informacoes">
          <div className="ocupacao">
            <p className="name">{candidate.name}</p>
            <p className="cargo">{candidate.cargo}</p>
          </div>
          <p>{candidate.numero}</p>
          <p>Partido: {candidate.partido}</p>
          <p className="categoria">Categoria: {candidate.categoria}</p>
        </div>
        <div className="historia">
          <p>{candidate.historia}</p>
          <a href="https://www.google.com/">ver mais...</a>
        </div>
        <Button
          backGround={"#051B03"}
          textColor={"#FFF"}
          backGroundHover={"#908c8c"}
          className="botao"
        >
          Adicionar
        </Button>
        <div className="saberMais">
          <a href="https://www.google.com/">Clique para ver mais...</a>
        </div>
        <button className="botaoMobile">+</button>
      </Container>
    </>
  );
};

export default CardCandidates;
