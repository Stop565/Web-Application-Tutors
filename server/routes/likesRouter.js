import Router from 'express';
const router = new Router();
import announcementController from '../controllers/announcementController.js';
import authMiddleware from '../middleware/authMiddleware.js';

router.get('/', authMiddleware,);
router.get('/:id', announcementController.getOne);



export default router;