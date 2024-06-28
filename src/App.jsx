import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import "./App.css";
import Home from "./pages/Home/Home.jsx";
import Saved from "./pages/Saved/Saved.jsx";
import UserRecipes from "./pages/UserRecipes/UserRecipes.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import Login from "./pages/Login/Login.jsx";
import * as AuthApi from "./utils/auth_api.js";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const authenticateUser = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const token = urlParams.get("token");

      if (token) {
        localStorage.setItem("token", token);
        setIsAuthenticated(true);
        const decodedToken = jwtDecode(token);
        localStorage.setItem("userEmail", decodedToken.email);
        try {
          const id = await AuthApi.findIdByEmail(decodedToken.email);
          localStorage.setItem("userId", id);
        } catch (error) {
          console.error("Error fetching user ID:", error);
        }
        window.history.replaceState(
          {},
          document.title,
          window.location.pathname
        );
      } else {
        const storedToken = localStorage.getItem("token");
        if (storedToken) {
          setIsAuthenticated(true);
          const decodedToken = jwtDecode(storedToken);
          localStorage.setItem("userEmail", decodedToken.email);
          try {
            const id = await AuthApi.findIdByEmail(decodedToken.email);
            localStorage.setItem("userId", id);
          } catch (error) {
            console.error("Error fetching user ID:", error);
          }
        }
      }
    };

    authenticateUser();
  }, []);

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={isAuthenticated ? <Home /> : <Login />} />
        <Route
          path="/saved"
          element={isAuthenticated ? <Saved /> : <Login />}
        />
        <Route
          path="/userRecipes"
          element={isAuthenticated ? <UserRecipes /> : <Login />}
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
