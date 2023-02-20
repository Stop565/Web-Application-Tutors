const ApiError = require('../error/ApiError');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {User, Likes} = require('../models/models');

const generateJwt = (id, email, role) => {
    return jwt.sign(
        {id, email, role},
        process.env.SECRET_KEY,
        {expiresIn: '48h'}
    )
}

class UserController {
    async registration(req,res){
        const {email, password, role} = req.body;
        if ( !email || !password) {
            return next(ApiError.badReq('Некоректний email або пароль'));
        }

        const candidate = await User.findOne({where: {email}});
        if (candidate){
            return next(ApiError.badReq('Користувач з таким email вже існує'));
        }

        const hashPassword = await bcrypt.hash(password, 7);
        const user = await User.create({email, role, password: hashPassword});
        const likes = await Likes.create({userId: user.id});
        const token = generateJwt( user.id, user.email, user.role );
        
        return res.json({token});
    }

    async login(req,res){

    }

    async check(req,res,next){
        const {id} = req.query;
        if (!id) {
            return next(ApiError.badReq('Не вказаний ID'));
        }
        res.json(id);
    }
}

module.exports = new UserController()