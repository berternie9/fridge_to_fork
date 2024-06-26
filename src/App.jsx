import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
