const sequelize = require('../database');
const {DataTypes} = require('sequelize');

const User = sequelize.define('user',{
    id: { type: DataTypes.INTEGER,primaryKey: true, autoIncrement: true },
    email: { type: DataTypes.STRING, unique: true },
    password: { type: DataTypes.STRING },
    role: { type: DataTypes.STRING, defaultValue: "USER" },
})


const Likes = sequelize.define('likes',{
    id: { type: DataTypes.INTEGER,primaryKey: true, autoIncrement: true },
})


const Likes_announcement = sequelize.define('likes_announcement',{
    id: { type: DataTypes.INTEGER,primaryKey: true, autoIncrement: true },
})

const Announcement = sequelize.define('announcement',{
    id: { type: DataTypes.INTEGER,primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, unique: true},
    price: { type: DataTypes.INTEGER},
    img: {},
    lesson_id: { type: DataTypes.INTEGER,primaryKey: true, autoIncrement: true },
    city_id: { type: DataTypes.INTEGER,primaryKey: true, autoIncrement: true },
})


const Lesson_id = sequelize.define('lesson_id', {
    id: { type: DataTypes.INTEGER,primaryKey: true, autoIncrement: true },
    lesson_id: { type: DataTypes.INTEGER,primaryKey: true, autoIncrement: true },
})

const City_id = sequelize.define('city_id', {
    id: { type: DataTypes.INTEGER,primaryKey: true, autoIncrement: true },
    city_id: { type: DataTypes.INTEGER,primaryKey: true, autoIncrement: true },
})


const Announcement_info = sequelize.define('announcement_info',{
    id: { type: DataTypes.INTEGER,primaryKey: true, autoIncrement: true },
    title: { type: DataTypes.STRING },
    description: { type: DataTypes.STRING}
})