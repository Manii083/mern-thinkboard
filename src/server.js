import express from "express";
import notesRoutes from "./Routes/notesRoutes.js";

const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// Mount the notes router
app.use("/api/notes", notesRoutes);

app.listen(5002, () => {
  console.log("✅ Server is running on port 5002");
});


export default app;

// mongodb+srv://manideepkatkam83_db_user:1yQZgTEBU5SOIqvP@cluster0.ymnv1uh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0