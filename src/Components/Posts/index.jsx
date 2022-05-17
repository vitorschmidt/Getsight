import { useEffect } from "react";
import { useHome } from "../../Providers/Home";

import PostCard from "../PostCard";

const Posts = ({ authenticated }) => {
  const { posts, getPosts } = useHome();

  useEffect(() => {
    getPosts();
  }, []);

  console.log(authenticated);

  return (
    <div>
      {posts.map((post, index) => (
        <PostCard authenticated={authenticated} key={index} post={post} />
      ))}
    </div>
  );
};

export default Posts;
