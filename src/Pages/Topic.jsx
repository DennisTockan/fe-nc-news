import React from "react";
import { useState, useEffect } from "react";
import { getAllArticles } from "../Utils/Api";
import { useParams } from "react-router-dom";
import Card from "../Components/Card";

const Topic = () => {
  const { topic } = useParams();
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sort_by, setSort_by] = useState("votes");
  const [order, setOrder] = useState("ASC");

  useEffect(() => {
    const fetchArticles = () => {
      getAllArticles(topic, sort_by, order).then((articles) => {
        setArticles(articles);
        setLoading(false);
      });
    };
    fetchArticles();
  }, [topic, sort_by, order]);

  return (
    <>
      <div>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            <h2 className="lists">
              {topic[0].toUpperCase() + topic.slice(1)} articles
            </h2>

            <form className="select">
              <select
                value={order}
                onChange={(e) => setOrder(e.target.value)}
                className="select-option"
              >
                <option value="ASC">Ascending</option>
                <option value="DESC">Descending</option>
              </select>

              <select
                value={sort_by}
                onChange={(e) => setSort_by(e.target.value)}
                className="select-option"
              >
                <option value="votes">Likes</option>
                <option value="comment_count">Comments</option>
                <option value="created_at">Date</option>
              </select>
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
                  comment_count
                }) => {
                  return (
                    <Card
                      key={article_id}
                      title={title}
                      author={author}
                      created_at={created_at}
                      votes={votes}
                      image={article_img_url}
                      comment_count={comment_count}
                      article_id={article_id}
                    />
                  );
                }
              )}
            </ol>
          </>
        )}
      </div>
    </>
  );
};

export default Topic;
