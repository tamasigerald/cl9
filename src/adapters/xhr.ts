import Axios from 'axios';
import salonDB from '@/dummies/salon_db.json';

function returnAxiosInstance() {
    return Axios.create();
}

export function get(url: string) {
    const axios = returnAxiosInstance();
    return axios.get(url);
}

export function post(url: string, data: any) {
    const axios = returnAxiosInstance();
    return axios.post(url, data);
}

export function fakeGetSalons() {
    return salonDB.salons;
}
