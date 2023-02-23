const Router = require('express');
const router = new Router();
const announcementController = require('../controllers/announcementController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/', authMiddleware,);
router.get('/:id', announcementController.getOne);



module.exports = router;