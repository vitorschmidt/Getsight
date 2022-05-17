import { useEffect } from "react";
import { useHome } from "../../Providers/Home";

import PostCard from "../PostCard";
import { Perfil, Post } from "./style";
import imgPerfil from "../../Assets/img/candidate.png";
import { Button } from "../../Components/Button";

const Posts = ({ authenticated }) => {
  const { posts, getPosts } = useHome();

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      <Perfil>
        <img src={imgPerfil} alt="perfil-usuario" />
        <h2>Usuario Logado</h2>
        <p>Descricao</p>
      </Perfil>
      <Post>
        <img src={imgPerfil} alt="perfil-usuario" />
        <form>
          <input
            type="text"
            name="title"
            placeholder="Titulo da sua publicacao"
          />
          <textarea name="post" placeholder="Comecar publicacao"></textarea>
          <Button
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
      {posts.map((post, index) => (
        <PostCard authenticated={authenticated} key={index} post={post} />
      ))}
    </div>
  );
};

export default Posts;
