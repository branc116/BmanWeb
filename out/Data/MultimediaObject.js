"use strict";
var MultimediaObject = (function () {
    function MultimediaObject() {
    }
    Object.defineProperty(MultimediaObject.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (v) {
            this._id = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MultimediaObject.prototype, "uri", {
        get: function () {
            return this._uri;
        },
        set: function (v) {
            this._uri = v;
        },
        enumerable: true,
        configurable: true
    });
    return MultimediaObject;
}());
//# sourceMappingURL=MultimediaObject.js.map