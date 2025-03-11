import express from 'express';
import cors from 'cors';
import env from 'dotenv';
import chatRoute from './route/AIchatRoute.js'
import { connectMongoDBatlas } from './config/dbCofig.js'

env.config();

const app = express();

app.use(express.json());

app.use(cors());

connectMongoDBatlas();

app.use('/chat', chatRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});