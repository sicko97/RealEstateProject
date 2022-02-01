import * as express from 'express';
import User from '../models/user';
import multer from 'multer';

const MIME_TYPE_MAP = {
    "image/png": "png",
    "image/jpeg": "jpg",
    "image/jpg": "jpg"
};
const storage = multer.diskStorage({
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



export class UserController {




    login = (req: express.Request, res: express.Response) => {

        let username = req.body.username;
        let password = req.body.password;

        User.findOne({ 'username': username, 'password': password }, (err, user) => {

            if (err) {
                console.log(err);
            } else {
                res.json(user);
            }

        })
    }

    register = (req: express.Request, res: express.Response) => {
        const url = req.protocol + '://' + req.get("host");
        let user = new User({
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
        })
        console.log("doslo do registracije");
        user.save().then(user => {
            res.status(200).json({ 'message': 'user added' })
        }).catch(err => {
            res.status(400).json({ 'message': err })
        })

    }


    getUnapprovedUsers = (req: express.Request, res: express.Response) => {
        User.find({ $and: [{ 'approved': 0 }, { $or: [{ 'type': 0 }, { 'type': 1 }] }] }, (err, users) => {
            if (err) {
                console.log(err);
            } else {
                res.json(users);
            }
        })
    }

    approveUser = (req: express.Request, res: express.Response) => {
        let username = req.body.username;
        User.collection.updateOne({ 'username': username }, { $set: { approved: 1 } });
        res.json({ 'message': 'ok' });
    }

    denyUser = (req: express.Request, res: express.Response) => {
        let username = req.body.username;
        User.collection.updateOne({ 'username': username }, { $set: { approved: -1 } });
        res.json({ 'message': 'ok' });
    }

    getAll = (req: express.Request, res: express.Response) => {
        User.find({}, (err, users) => {
            if (err) {
                console.log(err);
            } else {
                res.json(users);
            }
        })
    }


    updateUser = (req: express.Request, res: express.Response) => {
        let username = req.body.username;
        let email = req.body.email;
        let phone = req.body.phone;
        User.collection.updateOne({ 'username': username }, { $set: { email: email, phone: phone } });
        res.json({ 'message': 'ok' });
    }


    deleteUser = (req: express.Request, res: express.Response) => {
        let username = req.params.username;
        User.collection.deleteOne({ 'username': username }, (err, users) => {
            if (err) {
                console.log(err);
            } else {
                res.json({ 'message': 'ok' });
            }
        })
    }
}