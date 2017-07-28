import { BlogEntery } from "../Data/BlogEntery";
import { FsAsync } from "../libs/fsAsync";

export class Posts {
    public async getAllPosts(path: string) : Promise<Array<BlogEntery | NodeJS.ErrnoException> | NodeJS.ErrnoException> {
        const allPosts: BlogEntery[] = [];
        const fs = new FsAsync();
        const files = await fs.readdirAsync(path); //"../Data/BlogPosts"
        const filePromises : Array<Promise<BlogEntery | NodeJS.ErrnoException>> = [];
        if (!(files instanceof Array)) {
            return files;
        }
        for (var file in files) {
            if (file) {
                const task = fs.readFileAsync(path + files[file])
                                .then(this.stringToBlogEntery);
                filePromises.push(task);
            }
        }
        return await Promise.all(filePromises);
    }
    private stringToBlogEntery(value : string | NodeJS.ErrnoException) : BlogEntery {
        if ((typeof value === "string")) {
            return JSON.parse(value);
        }
        return new BlogEntery();
    }
}