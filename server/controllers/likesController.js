import ApiError from '../error/ApiError.js';
import { Likes, LikesAnnouncement, Announcement } from '../models/models.js';


class LikesController {
    async addLikesAnnouncement(req, res, next) {
        try {
            let likeId = req.user.id;
            let { announcementId } = req.query;


            let likesCompare = await LikesAnnouncement.findAndCountAll({ where: { likeId, announcementId } });
            let addLikes;


            if (likesCompare.count === 0) {
                addLikes = await LikesAnnouncement.create({ likeId, announcementId });
            } else if (likesCompare.count === 1) {
                let remove = await LikesAnnouncement.destroy({ where: { likeId, announcementId } });
            }

            return res.json(addLikes);
        } catch (e) {

            return next(ApiError.badReq(e.message));
        }
    }




    async getAllLikes(req, res, next) {
        try {
            // likeId=userId
            let likeId = req.user.id;
            let likesUser = await LikesAnnouncement.findAndCountAll({ where: { likeId } });

            return res.json(likesUser);
            /*
                        // забираєм всі announcementId
                        let id = [];
                        likesRows.forEach(element => {
                            id.push(element["announcementId"]);
                        });
            
                        //Шукаємо всі announcement з відповідними id
                        let announcementLikesId = await Announcement.findAndCountAll({ where: { id } })
            
                       // return res.json(announcementLikesId);
            */
        } catch (e) {
            return next(ApiError.badReq(e.message));
        }
    }


    async removeOneLikes(req, res, next) {
        try {
            const { removeLike } = req.query;
            let announcementId = removeLike;
            let likeId = req.user.id;
            let rem = await LikesAnnouncement.destroy({ where: { likeId, announcementId } });

            return res.json(rem);

        } catch (e) {
            return next(ApiError.badReq(e.message));
        }
    }

}





export default new LikesController();