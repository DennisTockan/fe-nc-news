import { useState } from "react";
import { patchArticleVote } from "../Api";

const SingleArticleCard = ({title,author, article_id, body, created_at, votes, image, isError, setIsError}) => {
  const [displayedVotes, setDisplayedVotes] = useState(0);

  const handleClick = () => {
    setDisplayedVotes((currentDisplayedVotes) => {
      return currentDisplayedVotes + 1;
    });
    patchArticleVote(article_id)
    .catch(() => {
      setDisplayedVotes((currentDisplayedVotes) => {
        return currentDisplayedVotes - 1;
      });
      setIsError(true);
    });
  };

  return (
    <section className="single-article">
      <div className="header">
        <h2>{title}</h2>
        <p>Created by: {author}</p>
        <p>Date:{created_at.slice(0, 10)}</p>
      </div>
      <img
        src={image}
        alt={image}
        className="article-image"
      />
      <p>{body}</p>
      <p>Likes: {votes + displayedVotes}</p>
      <button
        aria-label="like button"
        onClick={handleClick}
        disabled={displayedVotes > 0}
      >
        {" "}
        👍{" "}
      </button>
      {isError ? <p>Oops! Something's gone wrong! Please try again!</p> : null}
    </section>
  );
};

export default SingleArticleCard;
