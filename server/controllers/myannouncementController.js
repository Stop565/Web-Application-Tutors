import * as uuid from 'uuid';
import * as path from 'path';
import { Announcement, AnnouncementInfo } from '../models/models.js';
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
            let { announcementId } = req.query;

            if (userId === )



        } catch (e) {
            next(ApiError.badReq(e.message));
        }
    }
}

export default new MyAnnouncementController();