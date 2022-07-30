const express = require("express");
const router = express.Router();
const CartController = require("../controllers/cart.controller");

router.post("/addToCart", (req, res, next) => CartController.addNewItemToCart(req, res, next));
router.get("/get/all", (req, res, next) => CartController.getAllCartItems(req, res, next));
router.get("/getUserCart/:userId", (req, res, next) => CartController.getUserCartItems(req, res, next));

router.put("/update", (req, res, next) => CartController.updateCartItem(req, res, next));
router.delete("/delete/:cartId", (req, res, next) => CartController.deleteCartItem(req, res, next));

module.exports = router;
