import express from "express";
import notesRoutes from "./Routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5002;

// Middleware to parse JSON request bodies
app.use(express.json());

connectDB();

// middleware to parse JSON request bodies
app.use(express.json());

// Mount the notes router
app.use("/api/notes", notesRoutes);

app.listen(PORT, () => {
  console.log("✅ Server is running on port", PORT);
});


export default app;
