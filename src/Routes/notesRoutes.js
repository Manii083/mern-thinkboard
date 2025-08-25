import express from "express";
import {
  createController,
  getcontroller,
  updateController,
  deleteController,
} from "../controllers/notesRouteController.js";
const router = express.Router();

// GET all notes
router.get("/", createController);

// CREATE a new note
router.post("/", getcontroller);

// UPDATE a note by ID
router.put("/:id", updateController);

// DELETE a note by ID
router.delete("/:id", deleteController);

export default router;
