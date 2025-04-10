import dotenv from 'dotenv';
import express from 'express';
import rt from '../routers/mainRouter';

dotenv.config();

const appServer = express()
appServer.use(express.json())
appServer.use(rt)

const PORT = process.env.PORT || 3000
const HOST = process.env.IP || 'localhost'

appServer.listen(PORT, () => {
  console.log(`Server is running at http://${HOST}:${PORT}`)
})
