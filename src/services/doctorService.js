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
let saveScheduleDoctor = (data) => {
  return axios.post("/api/save_Schedule_doctor", data);
};
let getAllSchedule = (doctorId, date) => {
  return axios.get(`/api/get_All_Schedule?doctorId=${doctorId}&date=${date}`);
};
let sentBookingService = (data) => {
  return axios.post("/api/sent_Booking", data);
};

export {
  getAlldoctorManage,
  saveInfoDoctorService,
  getInfoDoctorService,
  saveScheduleDoctor,
  getAllSchedule,
  sentBookingService,
};
