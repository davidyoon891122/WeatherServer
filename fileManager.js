import fs from "fs"


export class FileManager {
    getWeatherKey() {
        let data = fs.readFileSync('./config/key.json')
        let jsonData = JSON.parse(data);
        return jsonData.key

    }
}