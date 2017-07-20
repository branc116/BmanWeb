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

    public abstract type : string;

}