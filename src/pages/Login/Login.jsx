import { Button } from "@mui/material";
import styles from "./Login.module.css";

export default function Login() {
  const handleLogin = () => {
    window.location.href = `${import.meta.env.VITE_BASE_URL}/auth/google`;
  };

  return (
    <div className={styles.btnWrapper}>
      <Button
        className={styles.loginBtn}
        onClick={handleLogin}
        variant="outlined"
      >
        Login with Google
      </Button>
    </div>
  );
}
