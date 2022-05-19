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
import { BsChatSquareText as ChatIcon } from "react-icons/bs";
import { AiFillHeart as HeartIcon } from "react-icons/ai";
import { useState } from "react";
import { Button } from "../../Components/Button";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useLogin } from "../../Providers/Login";
import { Api } from "../../services/Api";
import { useHome } from "../../Providers/Home";

const PostCard = ({ post, authenticated }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [showComments, setShowComments] = useState(false);

  const comments = post.comments;
  const { user } = useLogin();
  const { getPosts } = useHome();

  const formSchema = yup.object().shape({
    comment: yup
      .string()
      .required("Faca seu comentário")
      .min(2, "Minímo 2 caractéres"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  function handleOpenModal() {
    
    setIsOpen(true);
     
  }

  function handleCloseModal() {
    setIsOpen(false);
  }

  const showHiddenComments = () => {
    if (showComments === false) {
      setShowComments(true);
    } else {
      setShowComments(false);
    }
  };

  const customStyles = {
    overlay:{
        background: "#363636c5"
    },
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

  const token = localStorage.getItem("@GetSight:token");
  const newComment = (data) => {
    const commentsUpdated = [
      ...post.comments,
      {
        userId: user.id,
        userName: user.name,
        like: 0,
        usersLike: [],
        cidade: user.cidade,
        id: post.comments.length + 1,
        message: data.comment,
      },
    ];
    Api.patch(
      `/dashboard/${post.id}`,
      { comments: commentsUpdated },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((response) => {
        getPosts();
        handleCloseModal();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteUserPost = () => {
    Api.delete(`/dashboard/${post.id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        getPosts();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addLike = () => {
    const data = {
      userLikes: [...post.userLikes, user.id],
      postLikes: post.postLikes + 1,
    };
    Api.patch(`/dashboard/${post.id}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        getPosts();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const removeLike = () => {
    const data = {
      userLikes: post.userLikes.filter((post) => post !== user.id),
      postLikes: post.postLikes - 1,
    };
    Api.patch(`/dashboard/${post.id}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        getPosts();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const liked = post.userLikes.includes(user.id);

  const addLikeComment = (id) => {
    const data = {
      comments: post.comments.map((comment) => {
        if (comment.id === id) {
          comment.like = comment.like + 1;
          comment.userLikes = !comment.userLikes
            ? [user.id]
            : [...comment.userLikes, user.id];
          return comment;
        }
        return comment;
      }),
    };
    Api.patch(`/dashboard/${post.id}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        getPosts();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const removeLikeComment = (id) => {
    const data = {
      comments: post.comments.map((comment) => {
        if (comment.id === id) {
          comment.like = comment.like - 1;
          comment.userLikes = comment.userLikes.filter(
            (post) => post !== user.id
          );
          return comment;
        }
        return comment;
      }),
    };
    Api.patch(`/dashboard/${post.id}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        getPosts();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      {authenticated ? (
        <Container>
          <UserInfo>
            <img src={logo} alt="foto-perfil" />
            <div>
              <h2>{post.userName}</h2>
              <p>{post.cidade}</p>
            </div>
          </UserInfo>
          <Post>
            <h2>{post.title}</h2>
            <h3>{post.post}</h3>
            {post.userId === user.id && (
              <Button
                onClick={deleteUserPost}
                width="100%"
                maxWidth="200px"
                height="40px"
                backGround="#752020"
                textColor="#fff"
                borderRadius="8px"
              >
                Excluir
              </Button>
            )}
          </Post>

          <Feed>
            <h2>
              {post.postLikes}
              <HeartIcon
                onClick={liked ? removeLike : addLike}
                className="heart-icon"
              />
            </h2>
            <ChatIcon onClick={handleOpenModal} className="chat-icon" />
          </Feed>
          <Modal
            isOpen={modalIsOpen}
            onRequestClone={handleCloseModal}
            style={customStyles}
            
          >
            <ModalContent>
              <form onSubmit={handleSubmit(newComment)}>
                <div className="header">
                  <h2>Faca um comentario sobre essa postagem</h2>
                  <p onClick={handleCloseModal}>X</p>
                </div>

                <h3>Cometário</h3>
                <textarea
                  name="comment"
                  id="comentario"
                  placeholder="Insira o seu comentário..."
                  {...register("comment")}
                ></textarea>
                <span>{errors.comment && errors.comment.message}</span>
                <Button
                  type="submit"
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
          {showComments === false ? (
            <h4 onClick={showHiddenComments} className="btn-comments">
              Ver comentários...
            </h4>
          ) : (
            <h4 onClick={showHiddenComments} className="btn-comments">
              Recolher comentários...
            </h4>
          )}
          {showComments &&
            comments.map((el) => {
              const commentLiked = el.userLikes
                ? el.userLikes.includes(user.id)
                : false;
              return (
                <Comments key={el.id}>
                  <div className="user">
                    <img src={logo} alt="foto-perfil" />
                    <div>
                      <h2>{el.userName}</h2>
                      <p>{el.cidade}</p>
                    </div>
                  </div>
                  <div className="message">
                    <h3>{el.message}</h3>

                    <h2
                      onClick={() =>
                        commentLiked
                          ? removeLikeComment(el.id)
                          : addLikeComment(el.id)
                      }
                    >
                      <HeartIcon
                        onClick={liked ? removeLike : addLike}
                        className="heart-icon"
                      />
                      {el.like}
                    </h2>
                  </div>
                </Comments>
              );
            })}
        </Container>
      ) : (
        <Container>
          <UserInfo>
            <img src={logo} alt="foto-perfil" />
            <div>
              <h2>{post.userName}</h2>
              <p>{post.cidade}</p>
            </div>
          </UserInfo>
          <Post>
            <h2>{post.title}</h2>
            <h3>{post.post}</h3>
          </Post>
          <Feed>
            <h2>
              {" "}
              {post.postLikes} <HeartIcon className="heart-icon" />
            </h2>
            <ChatIcon onClick={handleOpenModal} className="chat-icon" />
          </Feed>

          <Modal
            isOpen={modalIsOpen}
            onRequestClone={handleCloseModal}
            style={customStyles}
          >
            <ModalContent>
              <div>Logar pra comentar</div>
              <p onClick={handleCloseModal}>X</p>
            </ModalContent>
          </Modal>
          {showComments === false ? (
            <h4 onClick={showHiddenComments}>Ver comentários...</h4>
          ) : (
            <h4 onClick={showHiddenComments}>Recolher comentários...</h4>
          )}
          {showComments &&
            comments.map((el) => (
              <Comments key={el.id}>
                <div className="user">
                  <img src={logo} alt="foto-perfil" />
                  <div>
                    <h2>{el.userName}</h2>
                    <p>{el.cidade}</p>
                  </div>
                </div>
                <div>
                  <h3>{el.message}</h3>

                  <h2 className="Comments-like">
                    {el.like}
                    <HeartIcon className="heart-icon" />
                  </h2>
                </div>
              </Comments>
            ))}
        </Container>
      )}
    </>
  );
};

export default PostCard;
