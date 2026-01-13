import mongoose from "mongoose";

const leadSchema = new mongoose.Schema({
  fullname: String,
  email: String,
  phone: String,
  service: String,
  message: String,
  createdAt: { type: Date, default: Date.now }
});

const Lead = mongoose.model("Lead", leadSchema);

export default Lead;
