import { useEffect } from "react";
import { useHome } from "../../Providers/Home";

import PostCard from "../PostCard";
import { Perfil, Post } from "./style";
import imgPerfil from "../../Assets/img/candidate.png";

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
          <input type="text" placeholder="Titulo da sua publicacao" />
          <textarea name="post" placeholder="Comecar publicacao"></textarea>
        </form>
      </Post>
      {posts.map((post, index) => (
        <PostCard authenticated={authenticated} key={index} post={post} />
      ))}
    </div>
  );
};

export default Posts;
