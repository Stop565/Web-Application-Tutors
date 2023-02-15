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


const LikesAnnouncement = sequelize.define('likesannouncement',{
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
})

const Announcement = sequelize.define('announcement',{
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, unique: true, allowNull: false},
    price: { type: DataTypes.INTEGER, allowNull: false },
    img: { type: DataTypes.STRING, allowNull: false},
})


const Lesson = sequelize.define('lesson', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, unique: true, allowNull: false},
})

const City = sequelize.define('city', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, unique: true, allowNull: false},
})


const AnnouncementInfo = sequelize.define('announcementinfo',{
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


Likes.hasMany(LikesAnnouncement);
LikesAnnouncement.belongsTo(Likes);


Lesson.hasMany(Announcement);
Announcement.belongsTo(Lesson);


City.hasMany(Announcement);
Announcement.belongsTo(City);

  
Announcement.hasMany(LikesAnnouncement);
LikesAnnouncement.belongsTo(Announcement);


Announcement.hasMany(AnnouncementInfo, {as: 'info'});
AnnouncementInfo.belongsTo(Announcement);


Lesson.belongsToMany(City, {through: LessonCity});
City.belongsToMany(Lesson, {through: LessonCity});


module.exports = {
    User,
    Likes,
    LikesAnnouncement,
    Announcement,
    Lesson,
    City,
    AnnouncementInfo,
    LessonCity,
}