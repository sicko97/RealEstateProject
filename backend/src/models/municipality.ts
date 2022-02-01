import mongoose from 'mongoose';


const Schema = mongoose.Schema;



let Municipality = new Schema({

    municipality: {
        type: String
    }
})

export default mongoose.model('Municipality', Municipality, 'municipalities');
