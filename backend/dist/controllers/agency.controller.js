"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const agency_1 = __importDefault(require("../models/agency"));
class AgencyController {
    constructor() {
        this.add = (req, res) => {
            let agency = new agency_1.default({
                name: req.body.name,
                address: req.body.address,
                city: req.body.city,
                phone: req.body.phone,
                pib: req.body.pib
            });
            agency.save().then(agency => {
                res.status(200).json({ 'message': 'agency added' });
            }).catch(err => {
                res.status(400).json({ 'message': err });
            });
        };
    }
}
exports.AgencyController = AgencyController;
//# sourceMappingURL=agency.controller.js.map