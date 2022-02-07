import mongoose from 'mongoose';


const Schema = mongoose.Schema;



let House = new Schema({

    title: {
        type: String
    },
    type: {
        type: String
    },
    rooms: {
        type: Number
    },
    city: {
        type: String
    },
    municipality: {
        type: String
    },
    microlocation: {
        type: String
    },
    street: {
        type: String
    },
    price: {
        type: Number
    },
    square: {
        type: Number
    },
    state: {
        type: String
    },
    year: {
        type: Number
    },
    heating: {
        type: String
    },
    floor: {
        type: Number
    },
    maxfloor: {
        type: Number
    },
    desc: {
        type: String
    },
    terrace: {
        type: Boolean
    },
    loggia: {
        type: Boolean
    },
    balcony: {
        type: Boolean
    },
    elevator: {
        type: Boolean
    },
    basement: {
        type: Boolean
    },
    garage: {
        type: Boolean
    },
    garden: {
        type: Boolean
    },
    ac: {
        type: Boolean
    },
    internet: {
        type: Boolean
    },
    intercom: {
        type: Boolean
    },
    phone: {
        type: Boolean
    },
    image1: {
        type: String
    },
    image2: {
        type: String
    },
    image3: {
        type: String
    },
    image4: {
        type: String
    },
    image5: {
        type: String
    },
    image6: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
})

export default mongoose.model('House', House, 'realestate');
