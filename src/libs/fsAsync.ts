import * as fs from "fs";

export class FsAsync {
    public readdirAsync(path: string) : Promise<Array<string> | NodeJS.ErrnoException> {
        return new Promise((resolve, reject) => {
            fs.readdir(path, (error, result) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(result);
                }
            });
        });
    }
    public readFileAsync(path: string) : Promise<string | NodeJS.ErrnoException> {
        return new Promise((resolve, reject) => {
            fs.readFile(path, (error, result) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(result.toString("utf8"));
                }
            });
        });
    }
}