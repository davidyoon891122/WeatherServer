import express, { json } from "express"
import { FileManager } from "./readFiles.js";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    const fileManager = new FileManager()
    res.send(fileManager.getWeatherKey());

});

app.listen(port, () => {
    console.log('Server is running',port);
});