const express = require("express");
const router = express.Router();
const Product = require("../models/product.model");
const productController = require("../controllers/product.controller");

// GET PRODUCTS API
router.get("/", productController.getProducts);
// GET A PARTICULAR PRODUCT API
router.get("/:id", productController.getProduct);
// CREATE A PRODUCT API
router.post("/", productController.createProduct);
// UPDATE A PRODUCT API
router.put("/:id", productController.updateProduct);
// DELETE A PRODUCT API
router.delete("/:id", productController.deleteProduct);

module.exports = router;
