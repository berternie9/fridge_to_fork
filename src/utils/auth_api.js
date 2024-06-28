import axios from "axios";

export async function findIdByEmail(email) {
  let res = await axios.get(`/api/user/${email}`);
  return res.data;
}
