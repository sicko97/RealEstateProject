import express from 'express'
import { LocationController } from '../controllers/location.controller';




const locationRouter = express.Router();

locationRouter.route('/getall').get(
    (req, res) => new LocationController().getAll(req, res)
);

locationRouter.route('/getmicro/:city/:municipality').get(
    (req,res)=> new LocationController().getMicrolocation(req,res)
)


locationRouter.route('/delete/:location').delete(
    (req,res)=> new LocationController().delete(req,res)
)

locationRouter.route('/getcities').get(
    (req,res)=> new LocationController().getAllCities(req,res)
)

locationRouter.route('/getmunicipalities/:city').get(
    (req,res)=> new LocationController().getMunicipalities(req,res)
)

locationRouter.route('/add').post(
    (req,res)=> new LocationController().addLocation(req,res)
)


export default locationRouter;