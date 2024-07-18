import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./NavBar.module.css";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";

import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import KitchenOutlinedIcon from "@mui/icons-material/KitchenOutlined";

export default function NavBar() {
  const navigate = useNavigate();
  const [drawerOpen, setDrawerOpen] = useState(false);

  function handleLogout(e) {
    localStorage.clear();
    navigate(`/login`);
  }

  function handleLogin(e) {
    navigate(`/login`);
  }

  function toggleDrawer(open) {
    return function (e) {
      if (e.type === "keydown" && (e.key === "Tab" || e.key === "Shift")) {
        return;
      }
      setDrawerOpen(open);
    };
  }

  function drawerList() {
    return (
      <Box
        sx={{ width: 250 }}
        role="presentation"
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
        className={styles.drawerBox}
      >
        <List>
          <ListItem disablePadding>
            <Link
              to="/"
              className={`${styles.linkDrawer} ${styles.linkWrapperDrawer}`}
            >
              Fridge to Fork
            </Link>
          </ListItem>
          <ListItem disablePadding>
            <Link
              to="/saved"
              className={`${styles.linkDrawer} ${styles.linkWrapperDrawer}`}
            >
              Saved
            </Link>
          </ListItem>
          <ListItem disablePadding>
            <Link
              to="/userRecipes"
              className={`${styles.linkDrawer} ${styles.linkWrapperDrawer}`}
            >
              My Recipes
            </Link>
          </ListItem>
          {localStorage.getItem("userEmail") ? (
            <>
              <ListItem>
                <ListItemText
                  primary={`Logged in as ${localStorage.getItem("userEmail")}`}
                />
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton onClick={handleLogout}>
                  <ListItemText primary="Logout" />
                </ListItemButton>
              </ListItem>
            </>
          ) : (
            <ListItem disablePadding>
              <ListItemButton onClick={handleLogin}>
                <ListItemText primary="Login" />
              </ListItemButton>
            </ListItem>
          )}
        </List>
      </Box>
    );
  }

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" enableColorOnDark className={styles.appBar}>
          <Toolbar className={styles.toolbar}>
            <div className={styles.toolbarLeft}>
              <IconButton
                className={styles.menuIcon}
                edge="start"
                color="inherit"
                onClick={toggleDrawer(true)}
                sx={{ display: { xs: "block", md: "none" } }}
              >
                <MenuOutlinedIcon />
              </IconButton>

              <Link
                to="/"
                className={`${styles.link} ${styles.linkWrapper} ${styles.title}`}
              >
                <IconButton
                  sx={{
                    color: "white",
                    "&:hover": {
                      backgroundColor: "transparent",
                    },
                  }}
                >
                  <KitchenOutlinedIcon></KitchenOutlinedIcon>
                </IconButton>
                <span>Fridge to Fork</span>
              </Link>
              <Box
                sx={{
                  display: { xs: "none", md: "flex" },
                  alignItems: "center",
                }}
              >
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
              </Box>
            </div>
            <Box
              sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}
            >
              {localStorage.getItem("userEmail") ? (
                <>
                  <span className={styles.loggedInAs}>
                    Logged in as {localStorage.getItem("userEmail")}
                  </span>
                  <Button
                    onClick={handleLogout}
                    className={`${styles.link} ${styles.linkWrapper}`}
                  >
                    Logout
                  </Button>
                </>
              ) : (
                <Button
                  onClick={handleLogin}
                  className={`${styles.link} ${styles.linkWrapper}`}
                >
                  Login
                </Button>
              )}
            </Box>
          </Toolbar>
          <Drawer
            className={styles.drawer}
            anchor="left"
            open={drawerOpen}
            onClose={toggleDrawer(false)}
          >
            {drawerList()}
          </Drawer>
        </AppBar>
      </Box>
    </>
  );
}
