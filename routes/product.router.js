const express = require("express");
const router = express.Router();
const ProductController = require("../controllers/product.controller");


// router.get("/:id", (req, res, next) => ProductController.getProductById(req, res));
// router.get("/get/all", (req, res, next) => ProductController.getAllProducts(req, res));
router.get("/get/categories", (req, res, next) => ProductController.getProductCategories(req, res));
router.get("/get", (req, res, next) => ProductController.getProducts(req, res));



router.post("/new", (req, res, next) => ProductController.addNewProduct(req, res, next));
router.put("/update", (req, res, next) => ProductController.updateProduct(req, res));

module.exports = router;