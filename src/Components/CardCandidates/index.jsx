//styles-component import
import { Container } from "./style";
import Modal from "react-modal";
import { useState } from "react";
import "./style.css";
//Components import
import { Button } from "../Button/";
import { useCola } from "../../Providers/Cola";

Modal.setAppElement("#root");

const CardCandidates = ({ candidate }) => {
  const { cola, handleCola, addCola } = useCola();
  const [modalIsOpen, setIsOpen] = useState(false);

  function handleOpenModal() {
    setIsOpen(true);
  }

  function handleCloseModal() {
    setIsOpen(false);
  }

  return (
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
        <a href="#" onClick={handleOpenModal}>
          ver mais...
        </a>
      </div>
      <Button
        backGround={"#051B03"}
        textColor={"#FFF"}
        backGroundHover={"#908c8c"}
        className="botao"
        onClick={() => addCola(candidate)}
      >
        Adicionar
      </Button>
      <div className="saberMais">
        <a href="#" onClick={handleOpenModal}>
          Clique para ver mais...
        </a>
      </div>
      <button className="botaoMobile" onClick={() => addCola(candidate)}>
        +
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClone={handleCloseModal}
        // style={customStyles}
        className="Modal"
        overlayClassName="Overlay"
      >
        <a href="#" onClick={handleCloseModal}>
          Fechar
        </a>
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
    </Container>
  );
};

export default CardCandidates;
