import express, { json } from "express"
import { FileManager } from "./fileManager.js";
import axios from "axios";
import { fetchWeatherData } from "./networkManager.js";

const app = express();
const port = 3000;
const fileManager = new FileManager()

app.get("/", (req, res) => {
    res.send("test");

});

app.get('/weather', async (req, res) => {
    console.log(req.query.lat);
    const lat = req.query.lat
    const lon = req.query.lon
    const lang = req.query.lang
    const units = req.query.units

    if (lat === '') {
        res.status(403)
        res.send("요청한 lat값이 존재하지 않습니다.")
    } 

    
    const tttt = await fetchWeatherData();

    res.send(tttt.data)

})

app.listen(process.env.PORT || port, () => {
    console.log('Server is running',port);
});