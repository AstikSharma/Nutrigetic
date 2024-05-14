const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const nodemailer = require("nodemailer");
require('dotenv').config();
const { Users, Blog } = require("./mongo");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/nutrigeticDB", { useNewUrlParser: true })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Failed to connect to MongoDB:", error);
  });

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587, // Port for STARTTLS
  secure: process.env.SECURE == 'true', // Use STARTTLS instead of SSL
  auth: {
    user: process.env.USER, // Replace with your Gmail address
    pass: process.env.PASS // Replace with your Gmail password
  },
});

// Send email function
async function sendEmail(email) {
  try {
    await transporter.sendMail({
      from: "",
      to: email,
      subject: "Test Email",
      text: "This is a test email sent from nodemailer.",
    });
    console.log("Email sent successfully to:", email);
  } catch (error) {
    console.error("Error sending email:", error);
  }
}

// Route to send emails
app.post("/send-email", async (req, res) => {
  try {
    // Fetch the latest registered user from the database
    const latestUser = await Users.findOne({}, { mail: 1 }, { sort: { _id: -1 } });

    if (latestUser) {
      const email = latestUser.mail; // Extract the email address of the latest registered user
      await sendEmail(email); // Send email to the latest registered recipient
      res.status(200).json({ message: "Email sent successfully." });
    } else {
      res.status(404).json({ error: "No users found." });
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal server error." });
  }
});

app.post("/", async (req, res) => {
  const { name, mail } = req.body;
  const data = {
    name: name,
    mail: mail,
  };
  try {
    await Users.create(data); // Changed from Users.insert to Users.create
    res.status(200).json({ message: "Data inserted successfully." });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: "Internal server error." });
  }
});


app.get('/api/blog/:id', async (req, res) => {
  try {
      const blog = await Blog.findById(req.params.id);
      res.json(blog);
  } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server Error' });
  }
});

app.get('/api/blogs', async (req, res) => {
  try {
      const blog = await Blog.find()
      console.log(blog+" dfdf")
      res.json(blog);
  } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server Error' });
  }
});

app.listen(8000, () => {
  console.log("Server connected on port 8000");
});
