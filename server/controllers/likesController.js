import ApiError from '../error/ApiError.js';
import { Likes, LikesAnnouncement, Announcement } from '../models/models.js';


class LikesController {
    async addLikesAnnouncement(req, res, next) {
        let likeId = req.user.id;
        let { announcementId } = req.query;
        const addLikes = await LikesAnnouncement.create({ likeId, announcementId });

        return res.json(addLikes);

    }



    async getAllLikes(req, res, next) {
        try {
            // likeId=userId
            let likeId = req.user.id;
            let likesUser = await LikesAnnouncement.findAndCountAll({ where: { likeId } });
            let likesRows = likesUser.rows;

            // забираєм всі announcementId
            let id = [];
            likesRows.forEach(element => {
                id.push(element["announcementId"]);
            });

            //Шукаємо всі announcement з відповідними id
            let announcementLikesId = await Announcement.findAndCountAll({ where: { id } })

            return res.json(announcementLikesId);
        } catch (e) {

            return next(ApiError.badReq(e.message));

            //return next(ApiError.badReq('Вподобаних оголошень немає'));
        }
    }
}





export default new LikesController();