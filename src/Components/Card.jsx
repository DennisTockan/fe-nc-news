import { Link } from "react-router-dom";

const Card = ({ title, author, created_at, votes, image, commentCount, article_id, body}) => {
  return (
    <Link to={`/articles/${article_id}`} key={article_id}>
      <div className="card">
        <h2>{title}</h2>
        <img src={image} alt={`Picture of ${title}`} />
        <p>{body}</p>
        <p>Created by: {author}</p>
        <p>Uploaded on: {created_at.slice(0, 10)}</p>
        {/* <p>Votes: {votes}</p>
        <p>Comments: {commentCount}</p> */}
      </div>
     </Link> 
  );
};
export default Card;
