import {
  Comments,
  Container,
  Feed,
  ModalContent,
  Post,
  UserInfo,
} from "./style";
import logo from "../../Assets/img/candidate.png";
import Modal from "react-modal";
import { useState } from "react";
import { Button } from "../../Components/Button";

const PostCard = ({ post }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const comments = post.comments;

  function handleOpenModal() {
    setIsOpen(true);
  }

  function handleCloseModal() {
    setIsOpen(false);
  }

  const showHiddenComments = () => {
    setShowComments(true);
  };

  const customStyles = {
    content: {
      width: "95%",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      right: "auto",
      bottom: "auto",
      background: "#c6c6c6c6",
    },
  };

  return (
    <Container>
      <UserInfo>
        <img src={logo} alt="foto-perfil" />
        <div>
          <h2>nome</h2>
          <p>Cidade - Estado</p>
        </div>
      </UserInfo>
      <Post>
        <h2>{post.title}</h2>
        <h3>{post.post}</h3>
      </Post>
      <Feed>
        <h2>{post.likePost}</h2>
        <p onClick={handleOpenModal}>Comentar</p>
      </Feed>
      <Modal
        isOpen={modalIsOpen}
        onRequestClone={handleCloseModal}
        style={customStyles}
      >
        <ModalContent>
          <form>
            <div className="header">
              <h2>Faca um comentario sobre essa postagem</h2>
              <p onClick={handleCloseModal}>X</p>
            </div>
            <h3>Título</h3>
            <input
              type="text"
              name="title"
              id="PostTitle"
              placeholder="Insira o titulo do seu comentario"
            />
            <h3>Cometário</h3>
            <textarea
              name="comentario"
              id="comentario"
              placeholder="Insira o seu comentário..."
            ></textarea>
            <Button
              width="100%"
              maxWidth="200px"
              height="40px"
              backGround="#000000"
              textColor="#fff"
              borderRadius="20px"
            >
              Comentar
            </Button>
          </form>
        </ModalContent>
      </Modal>
      <h4 onClick={showHiddenComments}>Ver comentários...</h4>
      {showComments &&
        comments.map((el) => (
          <Comments>
            <h3>{el.message}</h3>
            <h2>{el.like}</h2>
          </Comments>
        ))}
    </Container>
  );
};

export default PostCard;
