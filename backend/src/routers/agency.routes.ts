import express from 'express'
import { AgencyController } from '../controllers/agency.controller';



const agencyRouter = express.Router();


agencyRouter.route('/add').post(
    (req, res) => new AgencyController().add(req, res)
);

agencyRouter.route('/getAll').get(
    (req,res) => new AgencyController().getAll(req,res)
)

agencyRouter.route('/getOne').get(
    (req,res)=> new AgencyController().getOne(req,res)
)

export default agencyRouter;