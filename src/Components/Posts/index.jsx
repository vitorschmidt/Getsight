import { useEffect } from "react";
import { useHome } from "../../Providers/Home";

import PostCard from "../PostCard";

const Posts = () => {
  const { posts, getPosts } = useHome();

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      {posts.map((post, index) => (
        <PostCard key={index} post={post} />
      ))}
    </div>
  );
};

export default Posts;
