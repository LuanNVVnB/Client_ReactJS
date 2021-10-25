import axios from "../axios";

let handleLoginApi = (userEmail, userPassword) => {
  return axios.post("/api/login", { email: userEmail, password: userPassword });
};
let getAlluser = (userId) => {
  // return axios.get("/api/get_All_user?id=" + userId, { id: userId });
  return axios.get(`/api/get_All_user?id=${userId}`, { id: userId });
};
let createNewUserService = (data) => {
  return axios.post("/api/create_One_user", data);
}
let deleteUserService = (userId) => {
  return axios.get(`/api/delete_One_user?id=${userId}`, {
    id: userId
  });
}
let updateUserService = (data) => {
  return axios.post("/api/update_One_user", data);
}
let getAllcodeService = (datatype) => {
  return axios.get(`/api/allcode?type=${datatype}`, { type: datatype });
}
export { handleLoginApi, getAlluser, createNewUserService, deleteUserService, updateUserService, getAllcodeService };
