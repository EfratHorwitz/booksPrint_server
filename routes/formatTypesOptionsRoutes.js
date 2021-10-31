var express = require('express');
var router = express.Router();
var formatTypesOptionsController = require('../controllers/formatTypesOptionsController.js');

/*
 * GET
 */
router.get('/', formatTypesOptionsController.list);

/*
 * GET
 */
router.get('/:id', formatTypesOptionsController.show);

/*
 * POST
 */
router.post('/', formatTypesOptionsController.create);

/*
 * PUT
 */
router.put('/:id', formatTypesOptionsController.update);

/*
 * DELETE
 */
router.delete('/:id', formatTypesOptionsController.remove);

module.exports = router;
