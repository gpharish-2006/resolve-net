import express from "express";
import { complaintController, userComplaint,trackComplaint } from "../controllers/complaintController.mjs";
import authMiddleware from "../middleware/authMiddleware.mjs";
import upload from "../middleware/uploadMiddleware.mjs";

const router = express.Router()

router.post("/", authMiddleware,upload.single("image"), complaintController)
router.get("/user", authMiddleware, userComplaint)
router.get("/:complaintId", authMiddleware, trackComplaint)

export default router;