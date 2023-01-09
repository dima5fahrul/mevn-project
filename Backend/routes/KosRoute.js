import express from "express";
import {
  getAllKos,
  getKosById,
  saveKos,
  updateKos,
  deleteKos,
} from "../controllers/KosControllers.js";

const router = express.Router();

router.get("/kos", getAllKos);
router.get("/kos/:id", getKosById);
router.post("/kos/", saveKos);
router.patch("/kos/:id", updateKos);
router.delete("/kos/:id", deleteKos);

export default router;
