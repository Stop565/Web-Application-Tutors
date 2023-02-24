import { Lesson } from '../models/models.js';
import ApiError from '../error/ApiError.js';

class LessonController {
    async create(req, res) {
        const { name } = req.body;
        const lesson = await Lesson.create({ name });
        return res.json(lesson);
    }

    async getAll(req, res) {
        const lessons = await Lesson.findAll();
        return res.json(lessons);
    }

}

export default new LessonController();