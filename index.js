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

    if (lat === '' || lat == null || lon === '' || lon == null) {
        return res.status(403).send('lat 비어 있음')
    }
   
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=&appid=767cd7ad6286d493b227a37032a0bcd6&lang=kr}&units=metics}`;
    axios.get(url)
    .then(response => {
        res.send(response.data)
    })
    .catch(error => {
        res.status(400).send('error message')
    })

})

app.listen(process.env.PORT || port, () => {
    console.log('Server is running',port);
});