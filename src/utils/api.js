import axios from 'axios';

export default axios.create({
    baseURL:
        "http://localhost:8000/",
    // "https://devkush.pythonanywhere.com/",
    // headers: {
    //     "access-control-allow-origin": "*",
    //     'Content-Type': '*',
    //     "accept": "*"
    // },

    headers: { 'Content-Type': 'application/json' }
});