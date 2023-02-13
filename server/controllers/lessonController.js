const {Lesson} = require('../models/models');
const ApiError = require('../error/ApiError');

class LessonController {
    async create(req,res){
        const {name} = req.body;
        const lesson = await Lesson.create({name});
        return res.json(lesson);
    }

    async getAll(req,res){
        const lessons = await Lesson.findAll();
        return res.json(lessons);
    }

}

module.exports = new LessonController()