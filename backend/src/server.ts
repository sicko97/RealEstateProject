import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import userRouter from './routers/user.routes';
import agencyRouter from './routers/agency.routes'
import path from 'path';
import locationRouter from './routers/location.routes';
import realEstateRouter from './routers/realestate.routes';

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use("/images", express.static(path.join("images")));

mongoose.connect('mongodb://localhost:27017/realestate');
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('db connection ok');
})

const router = express.Router();

router.use('/users', userRouter);
router.use('/agency',agencyRouter);
router.use('/location',locationRouter)
router.use ('/realestate',realEstateRouter)
app.use('/', router);



app.listen(4000, () => console.log(`Express server running on port 4000`));