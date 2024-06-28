import axios from "axios";

export async function findIdByEmail(email) {
  const encodedEmail = encodeURIComponent(email);
  let res = await axios.get(
    `${import.meta.env.VITE_BASE_URL}/api/user/${encodedEmail}`
  );
  return res.data;
}
