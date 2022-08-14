const express = require('express');
const { RESPONSE_STATUS } = require('../util/res.constant');
const router = express.Router();
const usersRouter = require('./user.router');
const authRouter = require('./auth.router');
const productRouter = require('./product.router');
const cartRouter = require('./cart.router');
const { authenticateJWT } = require('../config/jwt.helper');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({
    status:RESPONSE_STATUS.SUCCESS,
    message:'Success'
  })
});

// without jwtTokenValidate

// router.use('/user', usersRouter);
// router.use('/auth', authRouter);
// router.use('/product', productRouter);
// router.use('/cart', cartRouter);

// with jwt token validate
router.use('/user',authenticateJWT, usersRouter);
router.use('/auth', authRouter);
router.use('/product',authenticateJWT, productRouter);
router.use('/cart', authenticateJWT,cartRouter);






module.exports = router;
