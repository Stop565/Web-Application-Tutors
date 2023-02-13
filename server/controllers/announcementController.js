const uuid = require('uuid');
const path = require('path');
const {Announcement} = require('../models/models');
const ApiError = require('../error/ApiError');

class AnnouncementController {
    async create(req, res, next){
        try{
            const {name, price, cityId, lessonId, info} = req.body;
            const {img} = req.files;
            let fileName = uuid.v4() + '.jpg';
            img.mv(path.resolve(__dirname, '..', 'static', fileName));

            const announcement = await Announcement.create({name, price, cityId, lessonId, img: fileName});

            return res.json(announcement);

        }catch(e){
            next(ApiError.badReq(e.message));
        }
        
    }

    async getAll(req,res){

    }

    async getOne (req,res){
        
    }
    

}

module.exports = new AnnouncementController