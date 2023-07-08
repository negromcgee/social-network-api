const router = require('express').Router();
const userRoute = require('./api/userroute');
const thoughtRoute = require('./api/thoughtroute');

router.use('/users', userRoute);
router.use('/thoughts', thoughtRoute);

module.exports = router;