import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Articles from "./Pages/Articles";
import SingleArticles from "./Pages/SingleArticle"
import Topic from "./Pages/Topic"

const App = () => {

  return (
    <div className="App">

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:topic" element={<Topic/> }/>
        <Route path="/articles/:article_id" element={<SingleArticles />}/>
      </Routes>

    </div>
  );
};

export default App;
