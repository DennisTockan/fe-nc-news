import { Link } from "react-router-dom";
import { getTopics } from "../Utils/Api";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    getTopics().then((topics) => {
      setTopics(topics);
    });
  }, []);

  return (
    <nav className="navbar">
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/articles">Articles</Link>
          {topics.map((topic, index) => {
            return (
              <Link
                to={`/articles/${topic.slug}`}
                key={index}
              >{` ${topic.slug[0].toUpperCase() + topic.slug.slice(1)}`}</Link>
            );
          })}
        <Link to="/profile">Profile</Link>
      </div>
    </nav>
  );
};

export default Navbar;
