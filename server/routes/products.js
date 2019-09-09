const productsRoutes = require("../controllers/products");
const express = require("express");
const router = express.Router();

router.get("/products", productsRoutes.readProducts);
router.get("/products/:id", productsRoutes.readOneProduct);
router.post("/products", productsRoutes.createProducts);
router.put("/products/:id", productsRoutes.updateProduct);
router.delete("/products/:id", productsRoutes.deleteProduct);

module.exports = router;
