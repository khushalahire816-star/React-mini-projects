import { useContext, useEffect } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import WelcomeMessage from "./Welcome-message";
// import { useState } from "react";

const PostList = () => {
  const { postList, addInitialPosts } = useContext(PostListData);
  // const [dataFetched, setDataFetched] = useState(false);
  
  // if (!dataFetched) {
    // fetch("https://dummyjson.com/posts")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     addInitialPosts(data.posts);
    //   });
  //   setDataFetched(true);
  // }

  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
      });
  }, []);

  return (
    <>
      {postList.length === 0 && <WelcomeMessage/>}
      {postList.map((post) => (
        <Post key={post.id} post = {post} />
      ))}
    </>
  );
};

export default PostList;
