const Router = require('express');
const router = new Router();
const announcementRouter = require('./announcementRouter');
const cityRouter = require('./cityRouter');
const lessonRouter = require('./lessonRouter');
const userRouter = require('./userRouter');


router.use('/user', userRouter);
router.use('/city', cityRouter);
router.use('/lesson', lessonRouter);
router.use('/announcement', announcementRouter);


module.exports = router;

