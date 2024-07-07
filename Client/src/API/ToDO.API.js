import axios from 'axios';

const ToDOAPI = axios.create({
   baseURL: 'http://localhost:8000/ToDO/api/v1/ToDO/',
})

export const getAllToDO = () => ToDOAPI.get("/");
export const getTodO = (id) => ToDOAPI.get(`/${id}/`);
export const CreateToDO = (ToDO) => ToDOAPI.post("/",ToDO);
export const DeleteToDO = (id) => ToDOAPI.delete(`/${id}`);
export const UpdateToDO = (id, ToDO) => ToDOAPI.put(`/${id}/`,ToDO);