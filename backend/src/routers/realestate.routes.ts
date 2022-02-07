import express from 'express'
import multer, { Options } from 'multer'
import { RealEstateController } from '../controllers/realestate.controller';

const storage = multer.diskStorage({
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


const realEstateRouter = express.Router();



realEstateRouter.route('/add').post(
    multer({ storage: storage }).array("images"), (req, res) => new RealEstateController().add(req, res)
);

realEstateRouter.route('/getAll').get(
    (req,res)=> new RealEstateController().getAll(req,res)
)

realEstateRouter.route('/getSimpleFilter').get(
    (req,res)=> new RealEstateController().getSimpleFilter(req,res)
)



export default realEstateRouter;