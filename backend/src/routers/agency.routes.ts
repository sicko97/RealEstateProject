import express from 'express'
import { AgencyController } from '../controllers/agency.controller';



const agencyRouter = express.Router();


agencyRouter.route('/add').post(
    (req, res) => new AgencyController().add(req, res)
);

agencyRouter.route('/getAll').get(
    (req,res) => new AgencyController().getAll(req,res)
)


export default agencyRouter;