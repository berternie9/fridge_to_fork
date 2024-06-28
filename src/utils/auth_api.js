import axios from "axios";

export async function findIdByEmail(email) {
  let res = await axios.get(
    `${import.meta.env.VITE_BASE_URL}/api/user/${email}`
  );
  return res.data;
}
