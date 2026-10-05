const WelcomeMessage = ({getPostsClick}) => {
  return (
    <center className="welcome-message">
      <h1>There is no Post</h1>
      <button type="button" onClick={getPostsClick} className="btn btn-primary">
        Get all Posts
      </button>
    </center>
  );
}

export default WelcomeMessage;