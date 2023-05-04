import Router from 'express';
const router = new Router();
import announcementRouter from './announcementRouter.js';
import cityRouter from './cityRouter.js';
import lessonRouter from './lessonRouter.js';
import userRouter from './userRouter.js';
import likesRouter from './likesRouter.js';
import myannouncementRouter from './myannouncementRouter.js'



router.use('/user', userRouter);
router.use('/city', cityRouter);
router.use('/lesson', lessonRouter);
router.use('/announcement', announcementRouter);
router.use('/likes', likesRouter);
router.use('/myannouncement', myannouncementRouter)


export default router;

