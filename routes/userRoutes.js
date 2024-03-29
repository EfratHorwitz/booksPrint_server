var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController.js');

//?איך יודע אם לפנות לגט או לפוסט - ע"פ אם יש בודי או לא או ע"פ משהו אחר

/*
 * GET
 */
router.get('/', userController.list);

/*
 * GET
 */
router.get('/:username/:password', userController.show);

/*
 * POST
 */
router.post('/', userController.create);

router.post('/verify', userController.verify)

/*
 * PUT
 */
router.put('/:id', userController.update);

/*
 * DELETE
 */
router.delete('/:id', userController.remove);

module.exports = router;
