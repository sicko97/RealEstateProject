"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RealEstateController = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const house_1 = __importDefault(require("../models/house"));
class RealEstateController {
    constructor() {
        this.image4 = "";
        this.image5 = "";
        this.image6 = "";
        this.add = (req, res) => {
            const url = req.protocol + '://' + req.get("host");
            const images = Object.assign(req.files);
            if (images.length >= 4) {
                this.image4 = images[3].filename;
            }
            if (images.length >= 5) {
                this.image5 = images[4].filename;
            }
            if (images.length >= 6) {
                this.image6 = images[5].filename;
            }
            let house = new house_1.default({
                _id: new mongoose_1.default.Types.ObjectId,
                title: req.body.title,
                type: req.body.type,
                rooms: req.body.rooms,
                city: req.body.city,
                municipality: req.body.municipality,
                microlocation: req.body.microlocation,
                street: req.body.street,
                price: req.body.price,
                square: req.body.square,
                state: req.body.state,
                year: req.body.year,
                heating: req.body.heating,
                floor: req.body.floor,
                maxfloor: req.body.maxfloor,
                desc: req.body.desc,
                terrace: req.body.terrace,
                loggia: req.body.loggia,
                balcony: req.body.balcony,
                elevator: req.body.elevator,
                basement: req.body.basement,
                garage: req.body.garage,
                garden: req.body.garden,
                ac: req.body.ac,
                internet: req.body.internet,
                intercom: req.body.intercom,
                phone: req.body.phone,
                image1: url + "/images/" + images[0].filename,
                image2: url + "/images/" + images[1].filename,
                image3: url + "/images/" + images[2].filename,
                image4: url + "/images/" + this.image4,
                image5: url + "/images/" + this.image5,
                image6: url + "/images/" + this.image6,
                seller: req.body.seller
            });
            console.log("doslo do registracije");
            house.save().then(house => {
                res.status(200).json({ 'message': 'user added' });
            }).catch(err => {
                res.status(400).json({ 'message': err });
            });
        };
        this.findById = (req, res) => {
            let id = req.query.id;
            let arrayofId = [id];
            house_1.default.findOne({ _id: id }, (err, house) => {
                if (err) {
                    console.log(err);
                }
                else {
                    res.json(house);
                }
            });
        };
        this.getAll = (req, res) => {
            house_1.default.find({}, (err, houses) => {
                if (err) {
                    console.log(err);
                }
                else {
                    return res.json(houses);
                }
            });
        };
        this.getSimpleFilter = (req, res) => {
            let type = req.query.type;
            let city = req.query.city;
            let municipality = req.query.municipality;
            let microlocation = req.query.microlocation;
            let maxPrice = req.query.maxprice;
            let squareFootage = req.query.squareFootage;
            let rooms = req.query.rooms;
            let queryObj = {};
            let filters = {
                type: type,
                city: city,
                municipality: municipality,
                microlocation: microlocation
            };
            // item = {};
            if (type != "undefined") {
                queryObj.type = type;
            }
            if (city != "undefined") {
                queryObj.city = city;
            }
            if (municipality != "undefined") {
                queryObj.municipality = municipality;
            }
            if (microlocation != "undefined") {
                queryObj.microlocation = microlocation;
            }
            if (maxPrice != "undefined") {
                queryObj.price = { $lte: parseInt(maxPrice) };
            }
            if (squareFootage != "undefined") {
                queryObj.square = { $gte: parseInt(squareFootage) };
            }
            if (rooms != "undefined") {
                queryObj.rooms = { $gte: parseFloat(rooms) };
            }
            console.log(queryObj);
            house_1.default.find(queryObj, (err, houses) => {
                if (err) {
                    console.log(err);
                }
                else {
                    res.json(houses);
                }
            });
        };
        this.getLastFive = (req, res) => {
            house_1.default.find({}, null, { limit: 5, sort: { 'date': -1 } }, (err, houses) => {
                if (err) {
                    console.log(err);
                }
                else {
                    res.json(houses);
                }
            });
        };
        this.getBySeller = (req, res) => {
            let seller = req.query.seller;
            house_1.default.find({ 'seller': seller }, (err, houses) => {
                if (err) {
                    console.log(err);
                }
                else {
                    res.json(houses);
                }
            });
        };
        this.sell = (req, res) => {
            let id = req.body.id;
            console.log(id);
            house_1.default.collection.updateOne({ _id: new mongoose_1.default.Types.ObjectId(id) }, { $set: { sold: true } });
            res.json({ 'message': 'ok' });
        };
    }
}
exports.RealEstateController = RealEstateController;
//# sourceMappingURL=realestate.controller.js.map