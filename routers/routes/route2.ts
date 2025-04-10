import express from 'express';

const rt2 = express.Router();

rt2.get('/two', (req, res) => {
    res.send('Router two is working!');
});

export default rt2;