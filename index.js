import express, { json } from "express"
import { FileManager } from "./fileManager.js";
import axios from "axios";

const app = express();
const port = 3000;
const fileManager = new FileManager()

app.get("/", (req, res) => {
    res.send(fileManager.getWeatherKey());

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

    const apiKey = fileManager.getWeatherKey()

    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=37.52510&lon=126.92620&exclude=&appid=${apiKey}&lang=kr&units=metric`;

    axios
    .get(url)
    .then(response => {
        res.send(response.data)
    })
    .catch(error => {
        res.status(400);
        res.send("날씨 조회 서버에 문제가 발생하여 확인중입니다.");
    })
})

app.listen(port, () => {
    console.log('Server is running',port);
});