import axios from "../axios";

let handleLoginApi = (userEmail, userPassword) => {
  return axios.post("/api/login", { email: userEmail, password: userPassword });
};
let getAlluser = (userId) => {
  // return axios.get("/api/get_All_user?id=" + userId, { id: userId });
  return axios.get(`/api/get_All_user?id=${userId}`, { id: userId });
};
export { handleLoginApi, getAlluser };
