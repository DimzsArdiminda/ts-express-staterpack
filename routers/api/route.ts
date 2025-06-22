import express from 'express';
import { getListUser, } from '../../controller/controller';

const rt = express.Router();

rt.get('/', (req, res) => {
    res.send('Router one is working!');
});

rt.get('/get-user', getListUser);

export default rt;