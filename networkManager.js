import { response } from "express";
import axios from "axios"
import { FileManager } from "./fileManager.js";

// export class NetworkManager {
//     constructor(url) {
//         this.url = url;
//         this.result = ''
//     }

//     requestData() {
//         axios
//         .get(this.url)
//         .then(res => {
//             // console.log(res.data);
//             return res.data;
//         })
//         .catch(error => {
//             console.log(error);
//         })
//     }

//     // result() {
//     //     return this.result;
//     // }
// }



export const fetchWeatherData = async () => {
    const fileManager = new FileManager()
    const apiKey = fileManager.getWeatherKey()
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=37.52510&lon=126.92620&exclude=&appid=${apiKey}&lang=kr&units=metric`;
    const res = await axios.get(url);
    return res
}