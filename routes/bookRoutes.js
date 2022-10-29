var express = require('express');
const { showAll } = require('../controllers/bookController.js');
var router = express.Router();
var bookController = require('../controllers/bookController.js');

/*
 * GET
 */
router.get('/', bookController.list);

/*
 * GET
 */
router.get('/:id', bookController.show);

router.get('/all/:id', bookController.showAll );

/*
 * POST
 */
router.post('/', bookController.create);

/*
 * PUT
 */
router.put('/:id', bookController.update);

/*
 * DELETE
 */
router.delete('/:id', bookController.remove);

module.exports = router;
