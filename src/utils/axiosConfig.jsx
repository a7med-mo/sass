import axios from "axios";


export const axiosConfig = axios.create(
    {
        baseURL: 'https://672e740c229a881691f01a4f.mockapi.io/api',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    }
);