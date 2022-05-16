import { Container, Feed, Post, UserInfo } from "./style";
import logo from "../../Assets/img/candidate.png";

const PostCard = ({ post }) => {
  const comments = post.comments;

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
      {/* {comments.map((el, userId) => (
        <>
          <p key={userId}>{el.message}</p>
          <span>{el.like}</span>
        </>
      ))} */}
      <Feed>
        <h2>{post.likePost}</h2>
      </Feed>
    </Container>
  );
};

export default PostCard;
