import { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import Home from "../../pages/Home/Home.jsx";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function NavBar() {

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" enableColorOnDark className={styles.appBar}>
          <Toolbar className={styles.toolbar}>
            <div>
              <Typography variant="h6" component="span">
                <Link to="/" className={`${styles.link} ${styles.linkWrapper}`}>
                  Recipe Finder
                </Link>
              </Typography>
              <Typography variant="h8" component="span">
                <Link to="/" className={`${styles.link} ${styles.linkWrapper}`}>
                  Favourites
                </Link>
              </Typography>
              <Typography variant="h8" component="span">
                <Link to="/" className={`${styles.link} ${styles.linkWrapper}`}>
                  My Recipes
                </Link>
              </Typography>
            </div>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};