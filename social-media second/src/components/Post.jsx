import { useContext } from "react";
import { TiDelete } from "react-icons/ti";
import { PostList } from "../store/post-list-store";

const Post = ({ post }) => {
  const {deletePostList} = useContext(PostList);

  return (
    <div className="card post-list" style={{ width: "30rem" }}>
      <div className="card-body">
        <h5 className="card-title">
          {post.title}
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            onClick={() => deletePostList(post.id)}
          >
            <TiDelete />
          </span>
        </h5>
        <p className="card-text">{post.body}</p>
        {Array.isArray(post.tags) &&
          post.tags.map((tag, index) => (
            <span key={index} className="badge text-bg-primary hashtags">
              {tag}
            </span>
          ))}
        <div className="alert alert-info reactions" role="alert">
          Likes: {post.reactions.likes} | Dislikes: {post.reactions.dislikes}
        </div>
      </div>
    </div>
  );
};

export default Post;
