import e, * as express from 'express';
import House from '../models/house';

export class RealEstateController {

    image4: String = "";
    image5: String = "";
    image6: String = "";

    add = (req: express.Request, res: express.Response) => {
        const url = req.protocol + '://' + req.get("host");
        const images = Object.assign(req.files);
        if (images.length >= 4) {
            this.image4 = images[3].filename;
        }
        if (images.length >= 5) {
            this.image5 = images[4].filename;
        }
        if (images.length >= 6) {
            this.image6 = images[5].filename;
        }
        let house = new House({
            title: req.body.title,
            type: req.body.type,
            rooms: req.body.rooms,
            city: req.body.city,
            municipality: req.body.municipality,
            microlocation: req.body.microlocation,
            street: req.body.street,
            price: req.body.price,
            square: req.body.square,
            state: req.body.state,
            year: req.body.year,
            heating: req.body.heating,
            floor: req.body.floor,
            maxfloor: req.body.maxfloor,
            desc: req.body.desc,
            terrace: req.body.terrace,
            loggia: req.body.loggia,
            balcony: req.body.balcony,
            elevator: req.body.elevator,
            basement: req.body.basement,
            garage: req.body.garage,
            garden: req.body.garden,
            ac: req.body.ac,
            internet: req.body.internet,
            intercom: req.body.intercom,
            phone: req.body.phone,
            image1: url + "/images/" + images[0].filename,
            image2: url + "/images/" + images[1].filename,
            image3: url + "/images/" + images[2].filename,
            image4: url +  "/images/" + this.image4,
            image5: url +  "/images/" + this.image5,
            image6:  url +  "/images/" + this.image6
        })
        console.log("doslo do registracije");
        house.save().then(house => {
            res.status(200).json({ 'message': 'user added' })
        }).catch(err => {
            res.status(400).json({ 'message': err })
        })

    }

    getAll=(req:express.Request, res:express.Response)=>{
            House.find({},(err,houses)=>{
                if(err){
                    console.log(err);
                }else{
                    return res.json(houses);
                }
            })
    }


}