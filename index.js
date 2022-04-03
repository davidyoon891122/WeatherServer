import express, { json } from "express"
import { FileManager } from "./fileManager.js";
import axios from "axios";
import { fetchWeatherData } from "./networkManager.js";
import { response } from "express";

const app = express();
const port = 3000;
const fileManager = new FileManager()

app.get("/", (req, res) => {
    res.send("test");

});

app.get('/weather', (req, res) => {
    console.log(req.query.lat);
    const lat = req.query.lat
    const lon = req.query.lon
    const lang = req.query.lang
    const units = req.query.units

    if (lat === '') {
        res.status(403)
        res.send("요청한 lat값이 존재하지 않습니다.")
    } 

    const fileManager = new FileManager()
    const apiKey = fileManager.getWeatherKey()
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=37.52510&lon=126.92620&exclude=&appid=${apiKey}&lang=kr&units=metric`;
    axios.get(url)
    .then(response => {
        res.send(response.data)
    })
    .catch(error => {
        res.send(400);
        res.send("서버 날씨 조회에 문제가 발생하였습니다.")
    })
    




})

app.listen(process.env.PORT || port, () => {
    console.log('Server is running',port);
});