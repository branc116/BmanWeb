abstract class MultimediaObject {
    private _id : string;
    public get id() : string {
        return this._id;
    }
    public set id(v : string) {
        this._id = v;
    }

    private _uri : URL;
    public get uri() : URL {
        return this._uri;
    }
    public set uri(v : URL) {
        this._uri = v;
    }
    private _title : string;
    public get title() : string {
        return this._title;
    }
    public set title(v : string) {
        this._title = v;
    }
    abstract type : "Image" | "Video" | "Word" | "Music";
}