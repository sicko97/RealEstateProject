"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const municipality_1 = __importDefault(require("../models/municipality"));
const city_1 = __importDefault(require("../models/city"));
const location_1 = __importDefault(require("../models/location"));
class LocationController {
    constructor() {
        this.getAll = (req, res) => {
            location_1.default.find({}, (err, locations) => {
                if (err) {
                    console.log(err);
                }
                else {
                    res.json(locations);
                }
            });
        };
        this.delete = (req, res) => {
            let location = req.params.location;
            location_1.default.collection.deleteOne({ 'microlocation': location }, (err, locations) => {
                if (err) {
                    console.log(err);
                }
                else {
                    res.json({ 'message': 'ok' });
                }
            });
        };
        this.getAllCities = (req, res) => {
            city_1.default.find({}, (err, cities) => {
                if (err) {
                    console.log(err);
                }
                else {
                    res.json(cities);
                }
            });
        };
        this.getMunicipalities = (req, res) => {
            let city = req.params.city;
            municipality_1.default.find({ 'city': city }, (err, municipalities) => {
                if (err) {
                    console.log(err);
                }
                else {
                    res.json(municipalities);
                }
            });
        };
        this.getMicrolocation = (req, res) => {
            let city = req.params.city;
            let municipality = req.params.municipality;
            location_1.default.find({ 'city': city, 'municipality': municipality }, (err, microlocations) => {
                if (err) {
                    console.log(err);
                }
                else {
                    res.json(microlocations);
                }
            });
        };
        this.addLocation = (req, res) => {
            let location = new location_1.default({
                city: req.body.city,
                municipality: req.body.municipality,
                microlocation: req.body.microlocation
            });
            console.log("doslo do registracije");
            location.save().then(location => {
                res.status(200).json({ 'message': 'location added' });
            }).catch(err => {
                res.status(400).json({ 'message': err });
            });
        };
    }
}
exports.LocationController = LocationController;
//# sourceMappingURL=location.controller.js.map