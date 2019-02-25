const router = require('express').Router();
const GeneralController = require('../controllers/general-controller');

router.get('/', GeneralController.index);

//for future purpose
router.get('/about', GeneralController.about);

module.exports = router;