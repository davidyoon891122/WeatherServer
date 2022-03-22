import fs from "fs"


export class FileManager {
    getWeatherKey() {
        let data = fs.readFileSync('./key.json')
        let jsonData = JSON.parse(data);
        return jsonData.key

    }
}