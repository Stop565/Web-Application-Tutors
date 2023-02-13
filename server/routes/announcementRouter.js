const Router = require('express');
const router = new Router();
const announcementController = require('../controllers/announcementController')

router.post('/', announcementController.create);
router.get('/', announcementController.getAll); 
router.get('/:id', announcementController.getOne);


module.exports = router;