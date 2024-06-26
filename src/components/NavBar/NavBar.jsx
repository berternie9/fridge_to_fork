import { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import Home from "../../pages/Home/Home.jsx";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";

export default function NavBar() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" enableColorOnDark className={styles.appBar}>
          <Toolbar className={styles.toolbar}>
            <div>
              <Link
                to="/"
                className={`${styles.link} ${styles.linkWrapper} ${styles.title}`}
              >
                Recipe Finder
              </Link>
              <Link
                to="/saved"
                className={`${styles.link} ${styles.linkWrapper}`}
              >
                Saved
              </Link>
              <Link
                to="/userRecipes"
                className={`${styles.link} ${styles.linkWrapper}`}
              >
                My Recipes
              </Link>
            </div>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}
