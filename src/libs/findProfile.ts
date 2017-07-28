import {FsAsync} from "../libs/fsAsync";
import { User } from "../Data/UserData";

export type ProfileReturn = [User, string, Array<string>];

export class Profile {
    /**
     * Get's proflie from json file located in path.
     * return value is [User object: User,
     *                  Json string of an User object : string,
     *                  Array of keys of contact info for the user : string[]]
     *              or NodeJS.ErrnoException
     */

    public async getProfile(path: string) : Promise<ProfileReturn | NodeJS.ErrnoException>  {
        const fs = new FsAsync();
        const meStr = await fs.readFileAsync(path);
        if (!(typeof meStr === "string")) {
            return meStr;
        }
        const me : User = JSON.parse(meStr);
        const infoKeys : Array<string> = new Array<string>();
        for (var inf in me.contactInfo) {
            if (inf) {
                infoKeys.push(inf);
            }
        }
        return [me, meStr, infoKeys];
    }
}