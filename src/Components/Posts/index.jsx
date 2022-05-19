import { useEffect } from "react";
import { useHome } from "../../Providers/Home";
import { Container } from "./style";
import PostCard from "../PostCard";
import { Perfil, Post } from "./style";
import imgPerfil from "../../Assets/img/candidate.png";
import { Button } from "../../Components/Button";
import { useLogin } from "../../Providers/Login";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

const Posts = ({ authenticated }) => {
  const { posts, getPosts, createNewPost } = useHome();
  const { user } = useLogin();

  const formSchema = yup.object().shape({
    title: yup
      .string()
      .required("Título obrigatório!")
      .min(3, "Minímo 3 caractéres"),
    post: yup
      .string()
      .required("Conteúdo obrigatório")
      .min(3, "Minímo 3 caractéres"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const newPost = (data) => {
    data.userId = user.id;
    data.userName = user.name;
    data.cidade = user.cidade;
    data.comments = [];
    data.postLikes = 0;
    data.userLikes = [];
    createNewPost(data);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <Container>
      {authenticated ? (
        <>
          <section>
            <Perfil>
              <img src={imgPerfil} alt="perfil-usuario" />
              <h2>{user.name}</h2>
              <p>{user.cidade}</p>
            </Perfil>
            <Post>
              <img src={imgPerfil} alt="perfil-usuario" />
              <form onSubmit={handleSubmit(newPost)}>
                <input
                  type="text"
                  name="title"
                  placeholder="Titulo da sua publicacao"
                  {...register("title")}
                />
                <span>{errors.title && errors.title.message}</span>
                <textarea
                  name="post"
                  placeholder="Comecar publicacao"
                  {...register("post")}
                ></textarea>
                <span>{errors.post && errors.post.message}</span>
                <Button
                  type="submit"
                  width="40%"
                  maxWidth="200px"
                  height="30px"
                  backGround="#051B03"
                  textColor="#fff"
                  borderRadius="20px"
                >
                  Postar
                </Button>
              </form>
            </Post>
          </section>
        </>
      ) : (
        <></>
      )}

      {posts.map((post, index) => (
        <PostCard authenticated={authenticated} key={index} post={post} />
      ))}
    </Container>
  );
};

export default Posts;
