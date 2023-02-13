require('dotenv').config();
const express  =require('express');
const sequelize = require('./database');
const models = require('./models/models');
const cors = require('cors');
const router = require('./routes/index');
const errorMiddle = require('./middleware/ErrorHandlingMiddleware');
const fileUpload = require('express-fileupload'); 
const path = require('path');

const PORT = process.env.PORT; 


const app = express();
app.use(cors());
app.use(express.json());
app.use(fileUpload({}));
app.use(express.static(path.resolve(__dirname, 'static')));
app.use('/api', router);


// Обробка помилок(middleware)
app.use(errorMiddle);



const start = async()=> {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(PORT, () => console.log('Server started...'));
    }catch(error){
        console.log(error);
    }
}

start();

