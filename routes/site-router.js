let router = require('express').Router();
let CredentialRouter = require('./credential-router');
let GeneralRouter = require('./general-router');
let ApiRouter = require('./api-router');

router.use(CredentialRouter);
router.use(GeneralRouter);
router.use(ApiRouter);


//works incorrect
// SiteRouter.use((req, res, next)=>{
//     req.status(404).end("Page not found!");
//     console.log("404");
// });

//print 500 every time
// SiteRouter.use((err, req, res, next)=>{
//     res.status(500).json(err);
//     console.log("500");
// })

module.exports = router;