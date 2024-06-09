import express from "express";
import {
  getProducts,
  getProductsById,
  createProduct,
} from "../controllers/productController.js";
import { protect, admin } from "../middleware/authMiddleware.js";
const router = express.Router();

router.route("/").get(getProducts).post(protect, admin, createProduct);

router.get("/:id", getProductsById);

export default router;
