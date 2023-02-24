import Router from 'express';
const router = new Router();
import cityController from '../controllers/cityController.js';
import checkRole from '../middleware/checkRoleMiddleware.js';


router.post('/', checkRole("ADMIN"), cityController.create);
router.get('/', cityController.getAll);


export default router;
