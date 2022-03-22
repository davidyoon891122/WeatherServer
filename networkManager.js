import { response } from "express";
import axios from "axios"

export class NetworkManager {
    constructor(url) {
        this.url = url;
        this.result = ''
    }

    requestData() {
        axios
        .get(this.url)
        .then(res => {
            // console.log(res.data);
            return res.data;
        })
        .catch(error => {
            console.log(error);
        })
    }

    // result() {
    //     return this.result;
    // }
}