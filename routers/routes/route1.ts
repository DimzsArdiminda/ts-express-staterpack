import express from 'express';

const rt = express.Router();

rt.get('/', (req, res) => {
    res.send('Router one is working!');
});

export default rt;