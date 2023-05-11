import * as uuid from 'uuid';
import * as path from 'path';
import { Announcement, AnnouncementInfo, LikesAnnouncement } from '../models/models.js';
import ApiError from '../error/ApiError.js';

class MyAnnouncementController {
    async getMyAnnouncment(req, res) {
        try {
            let userId = req.user.id;
            let myannouncements;


            if (true) {
                myannouncements = await Announcement.findAndCountAll({ where: { userId } });
            }
            return res.json(myannouncements);


        } catch (e) {
            next(ApiError.badReq(e.message));
        }
    }


    async deleteMyOneAnnouncement(req, res, next) {
        try {
            let userId = req.user.id;
            let { id } = req.query;
            let announcementId = id;

            const myOneannouncement = await Announcement.findOne({ where: { id, userId } });


            if (myOneannouncement.userId === userId) {
                const removeLike = await LikesAnnouncement.destroy({ where: { announcementId } });
                const infoDel = await AnnouncementInfo.destroy({ where: { announcementId } });
                const announcementDel = await Announcement.destroy({ where: { id } });
            }



            return res.json(id);


        } catch (e) {
            next(ApiError.badReq(e.message));
        }
    }
}

export default new MyAnnouncementController();