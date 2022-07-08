import axios from 'axios';

 const apiUrl = "http://192.168.1.135:8000/";
export const mediaUrl =apiUrl+"media/";

export default axios.create({
    baseURL:apiUrl,
    // "https://devkush.pythonanywhere.com/",
    // headers: {
    //     "access-control-allow-origin": "*",
    //     'Content-Type': '*',
    //     "accept": "*"
    // },

    headers: { 'Content-Type': 'application/json' }
});