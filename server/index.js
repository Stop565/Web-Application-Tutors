import config from 'dotenv/config';
import express from 'express';
import sequelize from './database.js';
import * as models from './models/models.js';
import cors from 'cors';
import router from './routes/index.js';
import errorMiddle from './middleware/ErrorHandlingMiddleware.js';
import fileUpload from 'express-fileupload';
import * as path from 'path';




const PORT = process.env.PORT;


const app = express();
app.use(cors());
app.use(express.json());
app.use(fileUpload({}));
app.use(express.static(path.resolve('static')));
app.use('/api', router);


// Обробка помилок(middleware)
app.use(errorMiddle);



const start = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(PORT, () => console.log('Server started...'));
    } catch (error) {
        console.log(error);
    }
}

start();

