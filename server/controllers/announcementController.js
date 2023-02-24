import * as uuid from 'uuid';
import * as path from 'path';
import { Announcement, AnnouncementInfo } from '../models/models.js';
import ApiError from '../error/ApiError.js';



class AnnouncementController {
    async create(req, res, next) {
        try {
            let { name, price, cityId, lessonId, info } = req.body;
            const { img } = req.files;
            let fileName = uuid.v4() + '.jpg';
            img.mv(path.resolve('static', fileName));

            const announcement = await Announcement.create({ name, price, cityId, lessonId, img: fileName });


            if (info) {
                info = JSON.parse(info);
                info.forEach(i => {
                    AnnouncementInfo.create({
                        title: i.title,
                        description: i.description,
                        announcementId: announcement.id,
                    })
                });
            }
            return res.json(announcement);

        } catch (e) {
            next(ApiError.badReq(e.message));
        }

    }

    async getAll(req, res) {
        let { cityId, lessonId, limit, page } = req.query;
        page = page || 1;
        limit = limit || 9;
        let offset = page * limit - limit;
        let announcements;

        if (!cityId && !lessonId) {
            announcements = await Announcement.findAndCountAll({ limit, offset });
        }
        if (!cityId && lessonId) {
            announcements = await Announcement.findAndCountAll({ where: { lessonId }, limit, offset });
        }
        if (cityId && !lessonId) {
            announcements = await Announcement.findAndCountAll({ where: { cityId }, limit, offset });
        }
        if (cityId && lessonId) {
            announcements = await Announcement.findAndCountAll({ where: { cityId, lessonId }, limit, offset });
        }
        return res.json(announcements);
    }

    async getOne(req, res) {
        const { id } = req.params;
        const announcement = await Announcement.findOne({
            where: { id },
            include: [{ model: AnnouncementInfo, as: 'info' }],
        })
        return res.json(announcement);
    }


}

export default new AnnouncementController();