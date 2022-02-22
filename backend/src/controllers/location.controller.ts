import e, * as express from 'express';
import Municipality from '../models/municipality';
import City from '../models/city';
import Location from '../models/location';

export class LocationController {


    getAll = (req: express.Request, res: express.Response) => {
        Location.find({}, (err, locations) => {
            if (err) {
                console.log(err);
            } else {
                res.json(locations);
            }
        })
    }

    delete = (req: express.Request, res: express.Response) => {
        let location = req.params.location;
        Location.collection.deleteOne({ 'microlocation': location }, (err, locations) => {
            if (err) {
                console.log(err);
            } else {
                res.json({ 'message': 'ok' });
            }
        })
    }

    getAllCities = (req: express.Request, res: express.Response) => {
        City.find({}, (err, cities) => {
            if (err) {
                console.log(err);
            } else {
                res.json(cities);
            }
        })
    }

    getMunicipalities = (req: express.Request, res: express.Response) => {
        let city = req.query.city;
        Municipality.find({ 'city': city }, (err, municipalities) => {
            if (err) {
                console.log(err);
            } else {
                res.json(municipalities);
            }
        })
    }

    getMicrolocation = (req: express.Request, res: express.Response) => {
        let city = req.query.city;
        let municipality = req.query.municipality;
        Location.find({ 'city': city, 'municipality': municipality }, (err, microlocations) => {
            if (err) {
                console.log(err);
            } else {
                res.json(microlocations);
            }
        })


    }

    addLocation = (req: express.Request, res: express.Response) => {

        let location = new Location({
            city: req.body.city,
            municipality: req.body.municipality,
            microlocation: req.body.microlocation
        })
        console.log("doslo do registracije");
        location.save().then(location => {
            res.status(200).json({ 'message': 'location added' })
        }).catch(err => {
            res.status(400).json({ 'message': err })
        })

    }

    getAllMunicipalities = (req: express.Request, res: express.Response) => {

        Municipality.find({}, (err, municipalities) => {
            if (err) {
                console.log(err);
            } else {
                res.json(municipalities);
            }
        })

    }

}