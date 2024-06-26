import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home.jsx";
import Saved from "./pages/Saved/Saved.jsx";
import UserRecipes from "./pages/UserRecipes/UserRecipes.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/saved" element={<Saved />} />
        <Route path="/userRecipes" element={<UserRecipes />} />
      </Routes>
    </>
  );
}

export default App;
