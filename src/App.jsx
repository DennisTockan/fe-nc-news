import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Articles from "./Pages/Articles";
import Coding from "./Pages/Coding";
import Cooking from "./Pages/Cooking";
import Football from "./Pages/Football";
import Profile from "./Pages/Profile";


const App = () => {

  return (
    <div className="App">

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/coding" element={<Coding />} />
        <Route path="/cooking" element={<Cooking />} />
        <Route path="/football" element={<Football />} />
        <Route path="/profile" element={<Profile />} />
        
        {/* FOOTER */}
        <Route path="/facebook" element={<Home />} />
        <Route path="/profile" element={<Home />} />
        <Route path="/profile" element={<Home />} />
        <Route path="/profile" element={<Home />} />
        <Route path="/profile" element={<Home />} />
        <Route path="/profile" element={<Home />} />
      </Routes>

      {/* <Footer /> */}
    </div>
  );
};

export default App;
