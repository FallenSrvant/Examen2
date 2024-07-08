import axios from 'axios';

const ToDOAPI = axios.create({
   baseURL: 'http://localhost:8000/ToDO/api/v1/',
})

export const getAllToDO = () => ToDOAPI.get("ToDO/");
export const getTodO = (id) => ToDOAPI.get(`ToDO/${id}/`);
export const CreateToDO = (ToDO) => ToDOAPI.post("ToDO/",ToDO);
export const DeleteToDO = (id) => ToDOAPI.delete(`ToDO/${id}`);
export const UpdateToDO = (id, ToDO) => ToDOAPI.put(`ToDO/${id}/`,ToDO);

// Additional endpoints for the exam
export const getAllToDOIds = () => ToDOAPI.get("/ToDO-ids/");
export const getAllToDOIdTitles = () => ToDOAPI.get("/ToDO-id-titles/");
export const getAllToDOUnresolved = () => ToDOAPI.get("/ToDO-unresolved/");
export const getAllToDOResolved = () => ToDOAPI.get("/ToDO-resolved/");