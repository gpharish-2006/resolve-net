import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongo from "../config/db.mjs";
import authRoutes from "../routes/authRoutes.mjs";
import complaintRoutes from "../routes/complaintRoutes.mjs";
import adminRoutes from "../routes/adminRoutes.mjs";

dotenv.config();

const app = express();

app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://resolve-net.vercel.app"
  ],
  methods: ["GET","POST","PUT","DELETE"],
  allowedHeaders: ["Content-Type","Authorization"],
  credentials: true
}));

app.use(express.json());
mongo();

app.use("/api/auth", authRoutes);
app.use("/api/complaints", complaintRoutes);
app.use("/api/admin", adminRoutes);

app.get("/", (req,res)=>{
  res.send("API Running");
});

export default app;