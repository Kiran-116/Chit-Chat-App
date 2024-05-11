import express from "express";
import protectRoute from "../middleware/protectRoute.js";
import { getUsersForSidebar } from "../controllers/user.controller.js";

const router = express.Router();

// Unauthenticated Users will not be able to call this Function:
router.get("/", protectRoute, getUsersForSidebar);

export default router;