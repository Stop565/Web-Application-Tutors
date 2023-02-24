import Router from 'express';
const router = new Router();
import lessonController from '../controllers/lessonController.js';
import checkRole from '../middleware/checkRoleMiddleware.js';

router.post('/', checkRole("ADMIN"), lessonController.create);
router.get('/', lessonController.getAll);


export default router;