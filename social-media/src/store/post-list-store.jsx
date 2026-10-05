import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPostList: () => {},
  addInitialPosts: () => {},
  deletePostList: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_ITEM") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId,
    );
  }else if (action.type === "ADD_INITIAL_POSTS") {
    newPostList = action.payload.posts;
  }else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList]
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    [],
  );

  const addPostList = (userId, postTitle, postBody, reactions, hashtags) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postBody,
        reactions: reactions,
        userId: userId,
        tags: hashtags,
      },
    });
  };

  const addInitialPosts = (posts) => {
    dispatchPostList({
      type: "ADD_INITIAL_POSTS",
      payload: {
        posts,
      },
    });
  };

  const deletePostList = (postId) => {
    dispatchPostList({
      type: "DELETE_ITEM",
      payload: {
        postId,
      },
    });
  };

  return (
    <PostList.Provider value={{ postList, addPostList, addInitialPosts, deletePostList }}>
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
