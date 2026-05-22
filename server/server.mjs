import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongo from './config/db.mjs';
import authRoutes from './routes/authRoutes.mjs';
import complaintRoutes from './routes/complaintRoutes.mjs';
import adminRoutes from './routes/adminRoutes.mjs';

dotenv.config();
const port = process.env.PORT || 5000;

const app = express()

app.use(cors())
app.use(express.json())
app.use('/api/auth', authRoutes)
app.use("/api/complaints", complaintRoutes)
app.use("/api/admin", adminRoutes)
app.use("/uploads", express.static("uploads"))

mongo();

app.get("/",(req,res)=>{
  res.send("Citizen Service API Running");
});

app.listen(port,()=>{
  console.log(`server started on http://localhost:${port}/`)
})