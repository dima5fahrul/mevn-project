import express from "express";
import {
  saveCheckout,
  getCheckout,
  updateCheckout,
  deleteCheckout,
  getCheckoutById,
} from "../controllers/CheckoutControllers.js";

const router = express.Router();

router.get("/checkout", getCheckout);
router.get("/checkout/:id", getCheckoutById);
router.post("/checkout/", saveCheckout);
router.patch("/checkout/:id", updateCheckout);
router.delete("/checkout/:id", deleteCheckout);

export default router;
