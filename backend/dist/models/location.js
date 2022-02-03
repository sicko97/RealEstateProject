"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let Location = new Schema({
    city: {
        type: String
    },
    municipality: {
        type: String
    },
    microlocation: {
        type: String
    }
});
exports.default = mongoose_1.default.model('Location', Location, 'microlocation');
//# sourceMappingURL=location.js.map