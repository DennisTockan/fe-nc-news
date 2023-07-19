import { useState, useEffect } from "react";
import { getCookingArticles, getSingleArticle} from "../Api";
import Card from "../Components/Card";

const Cooking = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getCookingArticles().then((articlesFromApi) => {
      setArticles(articlesFromApi);
      setIsLoading(false);
    });
  }, []);

  const [searchArticle, setSearchArticle] = useState("");
  useEffect(() => {
    getSingleArticle(searchArticle).then((articleFromApi) => {
    setSearchArticle(articleFromApi);
    });
  }, [searchArticle]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchArticle(searchArticle);
  };

  if (isLoading) return <p>Loading...</p>

  return (
    <div className="articles">
      <h1>Cooking Articles</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="search"> </label>
          Search for an article
          <input
            placeholder="Article"
            value={searchArticle}
            onChange={(event) => setSearchArticle(event.target.value)}
          />
        <button>Search</button>
      </form>

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
    </div>
  );
};

export default Cooking;
