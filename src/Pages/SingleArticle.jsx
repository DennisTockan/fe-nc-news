import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import  {getSingleArticle} from "../Api";
import Card from "../Components/Card";

const SingleArticle = () => {
  const {article_id} = useParams();

  const [article, setArticle] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState("");

  useEffect(() => {
    getSingleArticle(article_id).then((articleFromApi) => {
      setArticle(articleFromApi);
      console.log(articleFromApi)
      setIsLoading(false);
      })
      .catch(() => {
        setIsError(true);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>
  if (isError) return <p> Oops! Something's gone wrong!</p>

return (
  <section className="single-article">
    <div className="header">
    <h2>{article.title}</h2>
    <p>Created by: {article.author}</p>  
    <p>Date:{article.created_at.slice(0,10)}</p> 
    </div>
    <img src={article.article_img_url} alt={article.article_img_url} className="planet-image"/>
    <p>{article.body}</p>
    <p>Likes: {article.votes}</p>
  </section>

)
  
};

export default SingleArticle;