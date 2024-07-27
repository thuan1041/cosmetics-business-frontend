import axios from 'axios';

const instance = axios.create({
    baseURL: process.env.LOCAL_HOST,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default instance;