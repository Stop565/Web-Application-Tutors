const Router = require('express');
const lessonController = require('../controllers/lessonController');
const router = new Router();
const checkRole = require('../middleware/checkRoleMiddleware');

router.post('/', checkRole("ADMIN"), lessonController.create);
router.get('/', lessonController.getAll);


module.exports = router;