import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

// Contact Form API
app.post("/api/contact", (req, res) => {
  const { fullname, email, phone, service, message } = req.body;

  if (!fullname || !email || !phone || !service || !message) {
    return res.status(400).json({
      status: false,
      message: "All fields are required"
    });
  }

  console.log("New Lead Received:");
  console.log({ fullname, email, phone, service, message });

  res.json({
    status: true,
    message: "Form submitted successfully"
  });
});

// Start Server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// app.post("/api/contact", ...);