var express = require('express');
var router = express.Router();
var bindingTypesOptionsController = require('../controllers/bindingTypesOptionsController.js');

/*
 * GET
 */
router.get('/', bindingTypesOptionsController.list);

/*
 * GET
 */
router.get('/:id', bindingTypesOptionsController.show);

/*
 * POST
 */
router.post('/', bindingTypesOptionsController.create);

/*
 * PUT
 */
router.put('/:id', bindingTypesOptionsController.update);

/*
 * DELETE
 */
router.delete('/:id', bindingTypesOptionsController.remove);

module.exports = router;
