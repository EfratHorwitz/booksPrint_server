var express = require('express');
var router = express.Router();
var priceProposalController = require('../controllers/priceProposalController.js');

/*
 * GET
 */
router.get('/', priceProposalController.list);

/*
 * GET
 */
router.get('/:id', priceProposalController.show);

/*
 * POST
 */
router.post('/', priceProposalController.create);

/*
 * PUT
 */
router.put('/:id', priceProposalController.update);

/*
 * DELETE
 */
router.delete('/:id', priceProposalController.remove);

module.exports = router;
