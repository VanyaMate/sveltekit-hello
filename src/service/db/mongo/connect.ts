import * as mongoose from 'mongoose';
import { MONGO_DB_URL } from '$env/static/private';


const mongoDbUrl: string | undefined = MONGO_DB_URL;
let isConnected: boolean             = false;

export const connectMongo = async function () {
    if (isConnected) {
        return;
    }

    if (!mongoDbUrl) {
        throw new Error('MongoDb URL not exist');
    }

    await mongoose.connect(mongoDbUrl);
    isConnected = true;
};