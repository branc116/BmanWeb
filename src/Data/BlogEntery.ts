export class BlogEntery {
    constructor(tags?: string[], text?: string, multimedia?: MultimediaObject[]) {
        if (tags) {
            this.tags = tags;
        }
        if (text) {
            this.text = text;
        }
        if (multimedia) {
            this.multimedia = multimedia;
        }
    }
    private _createdDate : Date;
    public get createdDate() : Date {
        return this._createdDate;
    }
    public set createdDate(v : Date) {
        this._createdDate = v;
    }

    private _tags : string[];
    public get tags() : string[] {
        return this._tags;
    }
    public set tags(v : string[]) {
        this._tags = v;
    }

    private _text : string;
    public get text() : string {
        return this._text;
    }
    public set text(v : string) {
        this._text = v;
    }

    private _multimedia : MultimediaObject[];
    public get multimedia() : MultimediaObject[] {
        return this._multimedia;
    }
    public set multimedia(v : MultimediaObject[]) {
        this._multimedia = v;
    }
}