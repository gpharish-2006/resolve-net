import { nanoid } from "nanoid"; 
import Complaint from "../models/Complaint.mjs";

const complaintController = async (req, res) => {
    const { title, description, category } = req.body;
    const userId = req.user._id;
    
    if (!title || !description || !category) {
        return res.status(400).json({ message: "All fields are required" });
    }
    let imagePath = ""
    if(req.file){
        imagePath = req.file.path; 
    }

    try {
        const complaintId = "CMP-" + nanoid(8);
        const comp = await Complaint.create({
            complaintId,
            title,
            description,
            category,
            image: imagePath,
            status: "Pending",
            userId
        });
        res.status(201).json({ message: "Complaint Registered Successfully", complaint: comp });
    } catch (err) {
        res.status(500).json({ message: "Server Error", error: err.message });
    }
}

const userComplaint = async (req, res) => {
    const userId = req.user._id;
    try {
        const comp = await Complaint.find({ userId }).sort({ createdAt: -1 });
        res.status(200).json({ complaint: comp });
    } catch (err) {
        res.status(500).json({ message: "Server Error", error: err.message });
    }
}

const trackComplaint = async (req,res)=>{
    const { complaintId } = req.params;
    try{
        const complaint = await Complaint.findOne({ complaintId });
        if(!complaint){
            return res.status(404).json({ message: "Complaint not found" })
        }
        res.status(200).json({ complaint });
    }
    catch(err){
        res.status(500).json({ message: "Server Error", error: err.message });
    }
}

export {
  complaintController,
  userComplaint,
  trackComplaint
}
