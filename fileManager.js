import fs from "fs"
import path from "path"

export class FileManager {
    getWeatherKey() {
        const temp_dir = path.join(process.cwd(), 'config/')
        if (!fs.existsSync(temp_dir))
            fs.mkdirSync(temp_dir)

        let data = fs.readFileSync('./config/key.json')
        let jsonData = JSON.parse(data);
        return jsonData.key

    }
}