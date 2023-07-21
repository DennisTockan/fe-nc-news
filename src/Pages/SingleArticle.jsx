import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleArticle, getSingleArticleComments } from "../Api";
import SingleArticleCard from "../Components/SingleArticleCard";
import CommentCard from "../Components/Comment-Card";
import AddComments from "../Components/AddComments";

const SingleArticle = () => {
  const { article_id } = useParams();

  const [article, setArticle] = useState("");
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState("");

  useEffect(() => {
    getSingleArticle(article_id)
      .then((articleFromApi) => {
        setArticle(articleFromApi);
        setIsLoading(false);
      })
      .catch(() => {
        setIsError(true);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    getSingleArticleComments(article_id)
      .then((articleFromApi) => {
        setComments(articleFromApi);
        setIsLoading(false);
      })
      .catch(() => {
        setIsError(true);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  // if (isError) return <p> Oops! Something's gone wrong!</p>;

  return (
    <>
      <section className="single-article">
        <SingleArticleCard
          title={article.title}
          author={article.author}
          body={article.body}
          topic={article.topic}
          created_at={article.created_at}
          votes={article.votes}
          image={article.article_img_url}
          commentCount={article.comment_count}
          article_id={article.article_id}
          isError={isError}
          setIsError={setIsError}
        />
      </section>

    <section className="">
      <AddComments />

    </section>

      <section className="comments">
        <h2 className="comments-header"> Comments ({comments.length})</h2>
        <ol className="comments_list">
          {comments.map(({ comment_id, votes, body, author, created_at }) => {
            return (
              <CommentCard
                key={comment_id}
                author={author}
                body={body}
                created_at={created_at}
                votes={votes}
              />
            );
          })}
        </ol>
      </section>
    </>
  );
};

export default SingleArticle;
