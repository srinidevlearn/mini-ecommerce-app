const express = require("express");
const router = express.Router();
const AuthController = require("../controllers/auth.controller");

router.post("/login", (req, res, next) => AuthController.login(req, res, next));
router.post("/register", (req, res, next) => AuthController.register(req, res));
module.exports = router;
