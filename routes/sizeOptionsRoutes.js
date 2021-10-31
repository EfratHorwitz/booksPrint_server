var express = require('express');
var router = express.Router();
var sizeOptionsController = require('../controllers/sizeOptionsController.js');

/*
 * GET
 */
router.get('/', sizeOptionsController.list);

/*
 * GET
 */
router.get('/:id', sizeOptionsController.show);

/*
 * POST
 */
router.post('/', sizeOptionsController.create);

/*
 * PUT
 */
router.put('/:id', sizeOptionsController.update);

/*
 * DELETE
 */
router.delete('/:id', sizeOptionsController.remove);

module.exports = router;
