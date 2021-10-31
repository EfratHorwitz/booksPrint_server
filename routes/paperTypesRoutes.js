var express = require('express');
var router = express.Router();
var paperTypesController = require('../controllers/paperTypesController.js');

/*
 * GET
 */
router.get('/', paperTypesController.list);

/*
 * GET
 */
router.get('/:id', paperTypesController.show);

/*
 * POST
 */
router.post('/', paperTypesController.create);

/*
 * PUT
 */
router.put('/:id', paperTypesController.update);

/*
 * DELETE
 */
router.delete('/:id', paperTypesController.remove);

module.exports = router;
