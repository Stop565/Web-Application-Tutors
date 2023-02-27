import Router from 'express';
const router = new Router();
import announcementController from '../controllers/announcementController.js';
import authMiddleware from '../middleware/authMiddleware.js';


router.post('/', authMiddleware, announcementController.create);
router.get('/', announcementController.getAll);
router.get('/:id', announcementController.getOne);


export default router;