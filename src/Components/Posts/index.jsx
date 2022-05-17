import { useEffect } from "react";
import { useHome } from "../../Providers/Home";
import { Container } from "./style"; 
import PostCard from "../PostCard";

const Posts = () => {
  const { posts, getPosts } = useHome();

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <Container>
      {posts.map((post, index) => (
        <PostCard key={index} post={post} />
      ))}
    </Container>
  );
};

export default Posts;
