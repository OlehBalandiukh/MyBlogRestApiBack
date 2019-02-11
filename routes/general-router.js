let router = require('express').Router();
let GeneralController = require('../controllers/general-controller');

router.get('/', GeneralController.index);

//For future purpose
router.get('/about', GeneralController.about);

module.exports = router;