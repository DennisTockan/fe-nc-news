import { useState, useEffect } from "react";
import { getAllArticles} from "../Api";
import Card from "../Components/Card";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState("")

  useEffect(() => {
    getAllArticles().then((articlesFromApi) => {
      setArticles(articlesFromApi);
      setIsLoading(false);
    })
    .catch(() => {
      setIsError(true);
      setIsLoading(false);
    })
  }, []);

  if (isLoading) return <p>Loading...</p>
  if (isError) return <p> Oops! Something's gone wrong!</p>

  return (
      <ol>
        {articles.map(
          ({
            article_id,
            title,
            author,
            created_at,
            votes,
            article_img_url,
            comment_count,
          }) => {
            return (
              <Card
                key={article_id}
                title={title}
                author={author}
                created_at={created_at}
                votes={votes}
                image={article_img_url}
                commentCount={comment_count}
              />
            );
          }
        )}
      </ol>

  );
};

export default Articles;
