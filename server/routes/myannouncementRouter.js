import Router from 'express';
const router = new Router();
import myannouncementController from '../controllers/myannouncementController.js';
import authMiddleware from '../middleware/authMiddleware.js';


router.get('/', authMiddleware, myannouncementController.getMyAnnouncment);



export default router;