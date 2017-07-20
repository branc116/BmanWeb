"use strict";
var BlogEntery = (function () {
    function BlogEntery(tags, text, multimedia) {
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
    Object.defineProperty(BlogEntery.prototype, "createdDate", {
        get: function () {
            return this._createdDate;
        },
        set: function (v) {
            this._createdDate = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlogEntery.prototype, "tags", {
        get: function () {
            return this._tags;
        },
        set: function (v) {
            this._tags = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlogEntery.prototype, "text", {
        get: function () {
            return this._text;
        },
        set: function (v) {
            this._text = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlogEntery.prototype, "multimedia", {
        get: function () {
            return this._multimedia;
        },
        set: function (v) {
            this._multimedia = v;
        },
        enumerable: true,
        configurable: true
    });
    return BlogEntery;
}());
//# sourceMappingURL=BlogEntery.js.map