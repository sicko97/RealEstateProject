"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const location_controller_1 = require("../controllers/location.controller");
const locationRouter = express_1.default.Router();
locationRouter.route('/getall').get((req, res) => new location_controller_1.LocationController().getAll(req, res));
locationRouter.route('/getmicro').get((req, res) => new location_controller_1.LocationController().getMicrolocation(req, res));
locationRouter.route('/delete/:location').delete((req, res) => new location_controller_1.LocationController().delete(req, res));
locationRouter.route('/getcities').get((req, res) => new location_controller_1.LocationController().getAllCities(req, res));
locationRouter.route('/getmunicipalities').get((req, res) => new location_controller_1.LocationController().getMunicipalities(req, res));
locationRouter.route('/add').post((req, res) => new location_controller_1.LocationController().addLocation(req, res));
locationRouter.route('/getAllMunicipalities').get((req, res) => new location_controller_1.LocationController().getAllMunicipalities(req, res));
exports.default = locationRouter;
//# sourceMappingURL=location.routes.js.map