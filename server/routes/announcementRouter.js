import Router from 'express';
const router = new Router();
import announcementController from '../controllers/announcementController.js';

router.post('/', announcementController.create);
router.get('/', announcementController.getAll);
router.get('/:id', announcementController.getOne);


export default router;