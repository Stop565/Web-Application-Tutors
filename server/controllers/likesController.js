const ApiError = require('../error/ApiError');
const { Likes, LikesAnnouncement } = require('../models/models');


class LikesController {
    async addLikesAnnouncement(req, res, next) {
        const { id } = req.params;
    }
}