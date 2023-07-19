import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/articles">Articles</Link>
        <Link to="/coding">Coding</Link>
        <Link to="/cooking">Cooking</Link>
        <Link to="/football">Football</Link>
        <Link to="/profile">Profile</Link>
      </div>
    </nav>
  );
};

export default Navbar;
