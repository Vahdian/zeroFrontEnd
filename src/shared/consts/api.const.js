import axios from 'axios';

export const APIHeaders = {
    // 'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    // 'Accept-Language': {
    //     toString () {
    //         return i18next.language
    //     }
    // },
    // 'Authorization': {
    //     toString () {
    //         return `Bearer ${getCookieUtil('token')}`
    //     }
    // }
};

export const API = axios.create({
    baseURL: "https://zeroapp.herokuapp.com/api",
    timeout: 12000,
    headers: APIHeaders
});

export const APIlocal = axios.create({
    baseURL: "http://localhost:8888/api",
    timeout: 12000,
    headers: APIHeaders
});