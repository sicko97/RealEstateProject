import e, * as express from 'express';
import mongoose, { Mongoose } from 'mongoose'
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
            _id: new mongoose.Types.ObjectId,
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
            image4: url + "/images/" + this.image4,
            image5: url + "/images/" + this.image5,
            image6: url + "/images/" + this.image6,
            seller: req.body.seller,
            sold: req.body.sold
        })
        console.log("doslo do registracije");
        house.save().then(house => {
            res.status(200).json({ 'message': 'user added' })
        }).catch(err => {
            res.status(400).json({ 'message': err })
        })

    }

    findById = (req: express.Request, res: express.Response) => {
        let id = req.query.id;
        let arrayofId = [id];
        House.findOne({ _id: id }, (err, house) => {
            if (err) {
                console.log(err);
            } else {
                res.json(house);
            }
        })
    }

    getAll = (req: express.Request, res: express.Response) => {
        House.find({ 'sold': false }, (err, houses) => {
            if (err) {
                console.log(err);
            } else {
                return res.json(houses);
            }
        })
    }

    getSimpleFilter = (req: express.Request, res: express.Response) => {

        let type = req.query.type;
        let city = req.query.city;
        let municipality = req.query.municipality;
        let microlocation = req.query.microlocation;
        let maxPrice = req.query.maxprice;
        let squareFootage = req.query.squareFootage;
        let rooms = req.query.rooms;

        let queryObj: {
            type?: string;
            city?: string;
            municipality?: string;
            microlocation?: string;
            price?: Object;
            square?: Object;
            rooms?: Object;
            sold?: boolean;

        } = {};

        queryObj.sold = false;

        // item = {};

        if (type != "undefined") {
            queryObj.type = type;
        }

        if (city != "undefined") {
            queryObj.city = city;
        }


        if (municipality != "undefined") {
            queryObj.municipality = municipality;
        }

        if (microlocation != "undefined") {
            queryObj.microlocation = microlocation;
        }

        if (maxPrice != "undefined") {
            queryObj.price = { $lte: parseInt(maxPrice) };
        }

        if (squareFootage != "undefined") {
            queryObj.square = { $gte: parseInt(squareFootage) };
        }

        if (rooms != "undefined") {
            queryObj.rooms = { $gte: parseFloat(rooms) };
        }
        console.log(queryObj);

        House.find(queryObj, (err, houses) => {
            if (err) {
                console.log(err);
            } else {
                res.json(houses);
            }
        });
    }

    getLastFive = (req: express.Request, res: express.Response) => {

        House.find({ 'sold': false }, null, { limit: 5, sort: { 'date': -1 } }, (err, houses) => {
            if (err) {
                console.log(err);
            } else {
                res.json(houses);
            }
        })
    }


    getBySeller = (req: express.Request, res: express.Response) => {

        let seller = req.query.seller;

        House.find({ 'seller': seller }, (err, houses) => {
            if (err) {
                console.log(err);
            } else {
                res.json(houses);
            }
        })
    }

    sell = (req: express.Request, res: express.Response) => {
        let id = req.body.id;
        console.log(id);
        House.collection.updateOne({ _id: new mongoose.Types.ObjectId(id) }, { $set: { sold: true } });
        res.json({ 'message': 'ok' });
    }

    updateAvgPrice = (req: express.Request, res: express.Response) => {
        let id = req.body.id;
        let avgPrice = req.body.avgPrice;
        House.collection.updateOne({ _id: new mongoose.Types.ObjectId(id) }, { $set: { avgPrice: avgPrice } });
        res.json({ 'message': 'ok' });
    }
}