import sequelize from '../database.js';
import { DataTypes } from 'sequelize';

const User = sequelize.define('user',
    {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        email: { type: DataTypes.STRING, unique: true },
        password: { type: DataTypes.STRING },
        role: { type: DataTypes.STRING, defaultValue: "USER" },
    },
    {
        timestamps: false,
    });


const Likes = sequelize.define('likes',
    {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    },
    {
        timestamps: false,
    });


const LikesAnnouncement = sequelize.define('likesannouncement',
    {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    },
    {
        timestamps: false,
    });


const Announcement = sequelize.define('announcement',
    {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        name: { type: DataTypes.STRING, unique: true, allowNull: false },
        price: { type: DataTypes.INTEGER, allowNull: false },
        img: { type: DataTypes.STRING, allowNull: false },
    },
    {
        timestamps: false,
    });


const Lesson = sequelize.define('lesson',
    {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        name: { type: DataTypes.STRING, unique: true, allowNull: false },
    },
    {
        timestamps: false,
    });


const City = sequelize.define('city',
    {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        name: { type: DataTypes.STRING, unique: true, allowNull: false },
    },
    {
        timestamps: false,
    });


const AnnouncementInfo = sequelize.define('announcementinfo',
    {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        title: { type: DataTypes.STRING, unique: false, allowNull: false },
        description: { type: DataTypes.STRING, unique: false, allowNull: false }
    },
    {
        timestamps: false,
    });

//проміжна таблиця для city and lesson

const LessonCity = sequelize.define('lessoncity',
    {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    },
    {
        timestamps: false,
    });

//Таблиця зв'язків бази даних


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


User.hasMany(Announcement);
Announcement.belongsTo(User);


Announcement.hasMany(AnnouncementInfo, { as: 'info' });
AnnouncementInfo.belongsTo(Announcement);


Lesson.belongsToMany(City, { through: LessonCity });
City.belongsToMany(Lesson, { through: LessonCity });


export {
    User,
    Likes,
    LikesAnnouncement,
    Announcement,
    Lesson,
    City,
    AnnouncementInfo,
    LessonCity,
}