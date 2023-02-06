const sequelize = require('../database')
const {DataTypes} = require('sequelize');

const User = sequelize.define('user',{
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    email: { type: DataTypes.STRING, unique: true },
    password: { type: DataTypes.STRING },
    role: { type: DataTypes.STRING, defaultValue: "USER" },
})


const Likes = sequelize.define('likes',{
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
})


const Likes_announcement = sequelize.define('likes_announcement',{
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
})

const Announcement = sequelize.define('announcement',{
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, unique: true, allowNull: false},
    price: { type: DataTypes.INTEGER, allowNull: false },
    img: { type: DataTypes.STRING, allowNull: false},
})


const Lesson_id = sequelize.define('lesson_id', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, unique: true, allowNull: false},
})

const City_id = sequelize.define('city_id', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, unique: true, allowNull: false},
})


const Announcement_info = sequelize.define('announcement_info',{
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: DataTypes.STRING, unique: true, allowNull: false },
    description: { type: DataTypes.STRING, allowNull: false}
})

//Таблиця зв'язків бази даних

const LessonCity = sequelize.define('lessoncity',{
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
})


User.hasOne(Likes);
Likes.belongsTo(User);


Likes.hasMany(Likes_announcement);
Likes_announcement.belongsTo(Likes);


Lesson_id.hasMany(Announcement);
Announcement.belongsTo(Lesson_id);


City_id.hasMany(Announcement);
Announcement.belongsTo(City_id);

  
Announcement.hasMany(Likes_announcement);
Likes_announcement.belongsTo(Announcement);


Announcement.hasMany(Announcement_info);
Announcement_info.belongsTo(Announcement);


Lesson_id.belongsToMany(City_id, {through: LessonCity});
City_id.belongsToMany(Lesson_id, {through: LessonCity});


module.exports = {
    User,
    Likes,
    Likes_announcement,
    Announcement,
    Lesson_id,
    City_id,
    Announcement_info,
    LessonCity,
}