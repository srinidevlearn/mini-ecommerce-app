const express = require('express');
const { RESPONSE_STATUS } = require('../util/res.constant');
const router = express.Router();
const usersRouter = require('./user.router');
const authRouter = require('./auth.router');
const productRouter = require('./product.router');
const cartRouter = require('./cart.router');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({
    status:RESPONSE_STATUS.SUCCESS,
    message:'Success'
  })
});

router.use('/user', usersRouter);
router.use('/auth', authRouter);
router.use('/product', productRouter);
router.use('/cart', cartRouter);





module.exports = router;
