const CommentCard = ({ votes, body, author, created_at }) => {
  return (
    <div className="comment-card">
      <p className="author">{author.toUpperCase()}</p>
      <p>{body}</p>
      <p>Created on {created_at.slice(0, 10)}</p>
      <p>{votes} likes</p>
    </div>
  );
};

export default CommentCard;
