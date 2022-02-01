import express from 'express'
import { UserController } from '../controllers/user.controller'
import multer, { Options } from 'multer'
import user from '../models/user';

const storage = multer.diskStorage({
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


const userRouter = express.Router();


userRouter.route('/login').post(
    (req, res) => new UserController().login(req, res)
);

userRouter.route('/register').post(

    multer({ storage: storage }).single("image"), (req, res) => new UserController().register(req, res)
);


userRouter.route('/unapproved').get(
    (req, res) => new UserController().getUnapprovedUsers(req, res)
);

userRouter.route('/approve').post(
    (req, res) => new UserController().approveUser(req, res)
)

userRouter.route('/deny').post(
    (req, res) => new UserController().denyUser(req, res)
)

userRouter.route('/getall').get(
    (req, res) => new UserController().getAll(req, res)
)

userRouter.route('/update').post(
    (req, res) => new UserController().updateUser(req, res)
)

userRouter.route('/delete/:username').delete(
    (req, res) => new UserController().deleteUser(req, res)
)



export default userRouter;