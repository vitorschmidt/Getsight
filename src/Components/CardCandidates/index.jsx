import { Button } from "../Button";
import { Container } from "./style";
import Modal from "react-modal";
import { useState } from "react";

Modal.setAppElement("#root");

const CardCandidates = ({ candidate }) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function handleOpenModal() {
    setIsOpen(true);
  }

  function handleCloseModal() {
    setIsOpen(false);
  }

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      right: "auto",
      bottom: "auto",
      background: "#c6c6c6c6",
    },
  };

  return (
    <>
    <Container>
      <img src={candidate.image} alt="Foto do candidato" />
      <div className="informacoes">
        <div className="ocupacao">
          <p className="name">{candidate.name}</p>
          <p className="cargo">{candidate.cargo}</p>
        </div>
        <div className="historia">
          <p>{candidate.historia}</p>
          <a href="#" onClick={handleOpenModal}>
            ver mais...
          </a>
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
          <a href="#" onClick={handleOpenModal}>
            Clique para ver mais...
          </a>
        </div>
        <button className="botaoMobile">+</button>
      </Container>
      <Modal
        isOpen={modalIsOpen}
        onRequestClone={handleCloseModal}
        style={customStyles}
      >
        <Button
          backGround={"#051B03"}
          textColor={"#FFF"}
          backGroundHover={"#908c8c"}
          onClick={handleCloseModal}
        >
          Fechar
        </Button>
        <h3>Ficha Completa</h3>
        <p className="name">Nome: {candidate.name}</p>
        <p className="cargo">Cargo: {candidate.cargo}</p>
        <p>Numero: {candidate.numero}</p>
        <p>Partido: {candidate.partido}</p>
        <p className="categoria">Categoria: {candidate.categoria}</p>
        <p className="name">Descrição: {candidate.historia}</p>
        <p>Cidade: {candidate.cidade}</p>
        <p>Tipo de eleição: {candidate.eleicao}</p>
      </Modal>
    </>
  );
};

export default CardCandidates;
