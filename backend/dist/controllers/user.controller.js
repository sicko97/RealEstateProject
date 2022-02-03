"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = __importDefault(require("../models/user"));
const multer_1 = __importDefault(require("multer"));
const MIME_TYPE_MAP = {
    "image/png": "png",
    "image/jpeg": "jpg",
    "image/jpg": "jpg"
};
const storage = multer_1.default.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "backend/images");
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
class UserController {
    constructor() {
        this.login = (req, res) => {
            let username = req.body.username;
            let password = req.body.password;
            user_1.default.findOne({ 'username': username, 'password': password }, (err, user) => {
                if (err) {
                    console.log(err);
                }
                else {
                    res.json(user);
                }
            });
        };
        this.register = (req, res) => {
            const url = req.protocol + '://' + req.get("host");
            let user = new user_1.default({
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                username: req.body.username,
                password: req.body.password,
                city: req.body.city,
                birthday: req.body.birthday,
                phone: req.body.phone,
                email: req.body.email,
                agency: req.body.agency,
                licence: req.body.licence,
                type: req.body.type,
                image: url + "/images/" + req.file.filename,
                approved: req.body.approved
            });
            console.log("doslo do registracije");
            user.save().then(user => {
                res.status(200).json({ 'message': 'user added' });
            }).catch(err => {
                res.status(400).json({ 'message': err });
            });
        };
        this.getUnapprovedUsers = (req, res) => {
            user_1.default.find({ $and: [{ 'approved': 0 }, { $or: [{ 'type': 0 }, { 'type': 1 }] }] }, (err, users) => {
                if (err) {
                    console.log(err);
                }
                else {
                    res.json(users);
                }
            });
        };
        this.approveUser = (req, res) => {
            let username = req.body.username;
            user_1.default.collection.updateOne({ 'username': username }, { $set: { approved: 1 } });
            res.json({ 'message': 'ok' });
        };
        this.denyUser = (req, res) => {
            let username = req.body.username;
            user_1.default.collection.updateOne({ 'username': username }, { $set: { approved: -1 } });
            res.json({ 'message': 'ok' });
        };
        this.getAll = (req, res) => {
            user_1.default.find({}, (err, users) => {
                if (err) {
                    console.log(err);
                }
                else {
                    res.json(users);
                }
            });
        };
        this.updateUser = (req, res) => {
            let username = req.body.username;
            let email = req.body.email;
            let phone = req.body.phone;
            user_1.default.collection.updateOne({ 'username': username }, { $set: { email: email, phone: phone } });
            res.json({ 'message': 'ok' });
        };
        this.deleteUser = (req, res) => {
            let username = req.params.username;
            user_1.default.collection.deleteOne({ 'username': username }, (err, users) => {
                if (err) {
                    console.log(err);
                }
                else {
                    res.json({ 'message': 'ok' });
                }
            });
        };
    }
}
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map