import { useContext } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import WelcomeMessage from "./Welcome-message";

const PostList = () => {
  const { postList, addInitialPosts} = useContext(PostListData);

  const handlePostsClick = () => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
      });
  }
  return (
    <>
      {postList.length === 0 && <WelcomeMessage getPostsClick ={handlePostsClick} />}
      {postList.map((post) => (
        <Post key={post.id} post = {post} />
      ))}
    </>
  );
};

export default PostList;
