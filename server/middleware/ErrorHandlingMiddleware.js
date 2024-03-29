import ApiError from '../error/ApiError.js';


const errorMiddle = function (error, req, res, next) {
    if (error instanceof ApiError) {
        return res.status(error.status).json({ message: error.message });
    }
    return res.status(500).json({ message: "Невідома помилка" });
}

export default errorMiddle;