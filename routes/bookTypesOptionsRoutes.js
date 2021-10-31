var express = require('express');
var router = express.Router();
var bookTypesOptionsController = require('../controllers/bookTypesOptionsController.js');

/*
 * GET
 */
router.get('/', bookTypesOptionsController.list);

/*
 * GET
 */
router.get('/:id', bookTypesOptionsController.show);

/*
 * POST
 */
router.post('/', bookTypesOptionsController.create);

/*
 * PUT
 */
router.put('/:id', bookTypesOptionsController.update);

/*
 * DELETE
 */
router.delete('/:id', bookTypesOptionsController.remove);

module.exports = router;
