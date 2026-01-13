import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import Lead from "./models/Lead.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("MongoDB connection error:", err));

// Contact Form API
app.post("/api/contact", async (req, res) => {
  const { fullname, email, phone, service, message } = req.body;

  if (!fullname || !email || !phone || !service || !message) {
    return res.status(400).json({
      status: false,
      message: "All fields are required"
    });
  }

  try {
    const newLead = new Lead({ fullname, email, phone, service, message });
    await newLead.save();

    console.log("New Lead Received and Saved:");
    console.log({ fullname, email, phone, service, message });

    res.json({
      status: true,
      message: "Form submitted successfully"
    });
  } catch (error) {
    console.error("Error saving lead:", error);
    res.status(500).json({
      status: false,
      message: "Internal server error"
    });
  }
});

// Start Server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// app.post("/api/contact", ...);