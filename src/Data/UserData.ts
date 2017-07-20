import { ImageObject } from "./ImageObject";
export class User {
    /**
     *
     */
    constructor(name?: string, lastName?: string, contactInfo?: { [type: string]: string; }, image?: ImageObject) {
        if (contactInfo) {
            this.contactInfo = contactInfo;
        }
        if (image) {
            this.image = image;
        }
        if (lastName) {
            this.lastName = lastName;
        }
        if (name) {
            this.name = name;
        }
    }
    private _name : string;
    public get name() : string {
        return this._name;
    }
    public set name(v : string) {
        this._name = v;
    }

    private _lastName : string;
    public get lastName() : string {
        return this._lastName;
    }
    public set lastName(v : string) {
        this._lastName = v;
    }

    private _contactInfo : { [type: string]: string; };
    public get contactInfo() : { [type: string]: string; } {
        return this._contactInfo;
    }
    public set contactInfo(v : { [type: string]: string; }) {
        this._contactInfo = v;
    }

    private _image : ImageObject;
    public get image() : ImageObject {
        return this._image;
    }
    public set image(v : ImageObject) {
        this._image = v;
    }

}