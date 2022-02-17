"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const multer_1 = __importDefault(require("multer"));
const realestate_controller_1 = require("../controllers/realestate.controller");
const storage = multer_1.default.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "images");
    },
    filename: (req, file, cb) => {
        // const name = file.originalname
        //     .toLowerCase()
        //     .split(" ")
        //     .join("-");
        let ext = "";
        if (file.mimetype == "image/png") {
            ext = "png";
        }
        if (file.mimetype == "image/jpg") {
            ext = "jpg";
        }
        if (file.mimetype == "image/jpeg") {
            ext = "jpeg";
        }
        cb(null, "ime" + "-" + Date.now() + "." + ext);
    }
});
const realEstateRouter = express_1.default.Router();
realEstateRouter.route('/add').post((0, multer_1.default)({ storage: storage }).array("images"), (req, res) => new realestate_controller_1.RealEstateController().add(req, res));
realEstateRouter.route('/getAll').get((req, res) => new realestate_controller_1.RealEstateController().getAll(req, res));
realEstateRouter.route('/getSimpleFilter').get((req, res) => new realestate_controller_1.RealEstateController().getSimpleFilter(req, res));
realEstateRouter.route('/getById').get((req, res) => new realestate_controller_1.RealEstateController().findById(req, res));
exports.default = realEstateRouter;
//# sourceMappingURL=realestate.routes.js.map