import axios from "../axios";

//2. API FOR MANAGE USER
let getAlldoctorManage = (doctorId) => {
  // return axios.get("/api/get_All_user?id=" + userId, { id: userId });
  return axios.get(`/api/get_All_doctor?id=${doctorId}`, { id: doctorId });
};
let saveInfoDoctorService = (data) => {
  return axios.post("/api/save_Info_doctor", data);
};
let getInfoDoctorService = (doctorId) => {
  // return axios.get("/api/get_All_user?id=" + userId, { id: userId });
  return axios.get(`/api/get_Info_doctor?id=${doctorId}`, { id: doctorId });
};

export { getAlldoctorManage, saveInfoDoctorService, getInfoDoctorService };
