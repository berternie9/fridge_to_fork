import { Link, useNavigate } from "react-router-dom";
import styles from "./NavBar.module.css";
import { AppBar, Box, Toolbar, Button } from "@mui/material";

export default function NavBar() {
  const navigate = useNavigate();

  function handleLogout(e) {
    localStorage.clear();
    navigate("/login");
  }

  function handleLogin(e) {
    navigate("/login");
  }

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
                Fridge to Fork
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
            <div>
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
            </div>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}
