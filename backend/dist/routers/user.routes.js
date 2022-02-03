"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("../controllers/user.controller");
const multer_1 = __importDefault(require("multer"));
const storage = multer_1.default.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "images");
    },
    filename: (req, file, cb) => {
        const name = file.originalname
            .toLowerCase()
            .split(" ")
            .join("-");
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
        cb(null, name + "-" + Date.now() + "." + ext);
    }
});
const userRouter = express_1.default.Router();
userRouter.route('/login').post((req, res) => new user_controller_1.UserController().login(req, res));
userRouter.route('/register').post((0, multer_1.default)({ storage: storage }).single("image"), (req, res) => new user_controller_1.UserController().register(req, res));
userRouter.route('/unapproved').get((req, res) => new user_controller_1.UserController().getUnapprovedUsers(req, res));
userRouter.route('/approve').post((req, res) => new user_controller_1.UserController().approveUser(req, res));
userRouter.route('/deny').post((req, res) => new user_controller_1.UserController().denyUser(req, res));
userRouter.route('/getall').get((req, res) => new user_controller_1.UserController().getAll(req, res));
userRouter.route('/update').post((req, res) => new user_controller_1.UserController().updateUser(req, res));
userRouter.route('/delete/:username').delete((req, res) => new user_controller_1.UserController().deleteUser(req, res));
exports.default = userRouter;
//# sourceMappingURL=user.routes.js.map