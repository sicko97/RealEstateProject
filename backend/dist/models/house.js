"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let House = new Schema({
    _id: {
        type: mongoose_1.default.Types.ObjectId
    },
    title: {
        type: String
    },
    type: {
        type: String
    },
    rooms: {
        type: Number
    },
    city: {
        type: String
    },
    municipality: {
        type: String
    },
    microlocation: {
        type: String
    },
    street: {
        type: String
    },
    price: {
        type: Number
    },
    square: {
        type: Number
    },
    state: {
        type: String
    },
    year: {
        type: Number
    },
    heating: {
        type: String
    },
    floor: {
        type: Number
    },
    maxfloor: {
        type: Number
    },
    desc: {
        type: String
    },
    terrace: {
        type: Boolean
    },
    loggia: {
        type: Boolean
    },
    balcony: {
        type: Boolean
    },
    elevator: {
        type: Boolean
    },
    basement: {
        type: Boolean
    },
    garage: {
        type: Boolean
    },
    garden: {
        type: Boolean
    },
    ac: {
        type: Boolean
    },
    internet: {
        type: Boolean
    },
    intercom: {
        type: Boolean
    },
    phone: {
        type: Boolean
    },
    image1: {
        type: String
    },
    image2: {
        type: String
    },
    image3: {
        type: String
    },
    image4: {
        type: String
    },
    image5: {
        type: String
    },
    image6: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    },
    seller: {
        type: String
    }
});
exports.default = mongoose_1.default.model('House', House, 'realestate');
//# sourceMappingURL=house.js.map