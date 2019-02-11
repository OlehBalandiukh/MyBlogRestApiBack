let router = require('express').Router();
let CredentialController = require('../controllers/Credential-controller');

router.post('/register', CredentialController.register);
router.post('/login', CredentialController.login);
router.get('/logout', CredentialController.logout);

module.exports = router;