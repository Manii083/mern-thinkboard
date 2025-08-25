import express from "express";
const router = express.Router();

// GET all notes
router.get("/", (req, res) => {
  res.status(200).send("You just fetched the notes!");
});

// CREATE a new note
router.post("/", (req, res) => {
  res.status(201).json({ message: "Note created successfully" });
});

// UPDATE a note by ID
router.put("/:id", (req, res) => {
  const noteId = req.params.id;
  res.status(201).json({ message: `Note with id ${noteId} updated successfully` });
});

// DELETE a note by ID
router.delete("/:id", (req, res) => {
  const noteId = req.params.id;
  res.status(201).json({ message: `Note with id ${noteId} deleted successfully` });
});

export default router;
