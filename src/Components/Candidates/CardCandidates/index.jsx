import candidateLogo from "../../img/candidate.png";
import { Container } from "./style";

const CardCandidates = ({ candidate }) => {
  return (
    <>
      <Container>
        <img src={candidate.image} alt="Foto do candidato" />
        <div className="informacoes">
          <div className="ocupacao">
            <p className="name">{candidate.name}</p>
            <p>{candidate.cargo}</p>
          </div>
          <p>{candidate.numero}</p>
          <p>Partido: {candidate.partido}</p>
          <p>Categoria: {candidate.categoria}</p>
        </div>
        <div className="historia">
          <p>{candidate.historia}</p>
          <a href="https://www.google.com/">ver mais...</a>
        </div>
      </Container>
    </>
  );
};

export default CardCandidates;
