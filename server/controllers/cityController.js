import { City } from '../models/models.js';
import ApiError from '../error/ApiError.js';


class CityController {
    async create(req, res) {
        const { name } = req.body;
        const city = await City.create({ name });
        return res.json(city);
    }

    async getAll(req, res) {
        const citys = await City.findAll();
        return res.json(citys);
    }

}

export default new CityController();