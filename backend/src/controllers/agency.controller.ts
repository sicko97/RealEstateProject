import * as express from 'express';
import Agency from '../models/agency';

export class AgencyController{


    add = (req: express.Request, res: express.Response) => {

            let agency  = new Agency({
                name : req.body.name,
                address : req.body.address,
                city : req.body.city,
                phone : req.body.phone,
                pib : req.body.pib
            })

            agency.save().then(agency => {
                res.status(200).json({ 'message': 'agency added' })
            }).catch(err => {
                res.status(400).json({ 'message': err })
            })

       
    }



}