import axios from 'axios';

export default axios.create({
    baseURL:
        "http://192.168.1.135:8000/",
    // "https://devkush.pythonanywhere.com/",
    // headers: {
    //     "access-control-allow-origin": "*",
    //     'Content-Type': '*',
    //     "accept": "*"
    // },

    headers: { 'Content-Type': 'application/json' }
});