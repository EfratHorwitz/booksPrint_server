var express = require('express');
var router = express.Router();
var colorOptionsController = require('../controllers/colorOptionsController.js');

/*
 * GET
 */
router.get('/', colorOptionsController.list);

/*
 * GET
 */
router.get('/:id', colorOptionsController.show);

/*
 * POST
 */
router.post('/', colorOptionsController.create);

/*
 * PUT
 */
router.put('/:id', colorOptionsController.update);

/*
 * DELETE
 */
router.delete('/:id', colorOptionsController.remove);

module.exports = router;
