import mongoose from 'mongoose';


const Schema = mongoose.Schema;



let User = new Schema({

    firstname: {
        type: String
    },
    lastname: {
        type: String
    },
    username: {
        type: String
    },
    password: {
        type: String
    },
    city: {
        type: String
    },
    birthday: {
        type: String
    },
    phone: {
        type: Number
    },
    email: {
        type: String
    },
    agency: {
        type: String
    },
    licence: {
        type: Number
    },
    type: {
        type: Number
    },
    image: {
        type: String
    },
    approved: {
        type: Number
    }
})

export default mongoose.model('User', User, 'users');
