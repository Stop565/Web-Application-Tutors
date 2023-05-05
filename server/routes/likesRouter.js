import Router from 'express';
const router = new Router();
import announcementController from '../controllers/announcementController.js';
import authMiddleware from '../middleware/authMiddleware.js';
import likesController from '../controllers/likesController.js'



router.post('/', authMiddleware, likesController.addLikesAnnouncement);
//router.put('/', authMiddleware, likesController.removeOneLikes);
router.get('/', authMiddleware, likesController.getAllLikes);
//router.get('/:id', announcementController.getOne);




export default router;