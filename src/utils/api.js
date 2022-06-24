import axios from 'axios';

export default axios.create({
    baseURL: "https://devkush.pythonanywhere.com/",
    // headers: {
    //     "access-control-allow-origin": "*",
    //     'Content-Type': '*',
    //     "accept": "*"
    // },

    headers: { 'Content-Type': 'application/json' }
});