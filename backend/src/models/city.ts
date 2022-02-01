import mongoose from 'mongoose';


const Schema = mongoose.Schema;



let City = new Schema({

    city: {
        type: String
    }
})

export default mongoose.model('City', City, 'cities');
