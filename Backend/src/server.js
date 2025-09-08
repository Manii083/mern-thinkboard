import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import notesRoutes from "./Routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import rateLimiter from "./middlewares/ratelimitter.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5002;


// Middleware to parse JSON request bodies
app.use(cors({
  origin: "http://localhost:5173", // Replace with your frontend URL
}));
app.use(express.json());
app.use(rateLimiter);


// a simple middleware to log request method and url
// app.use((req, res, next) => {
//   console.log(`the request method is ${req.method} and the url is ${req.url}`);
//   next();
// });


// Mount the notes router
app.use("/api/notes", notesRoutes);

connectDB().then(() =>{
  app.listen(PORT, () => {
    console.log("✅ Server is running on port", PORT);
  });
})

export default app;
