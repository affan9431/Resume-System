const mongoose = require("mongoose");

const resumeSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, 
  name: String,
  email: String,
  phone: String,
  education: [
    {
      degree: String,
      institution: String,
      year: String,
    },
  ],
  experience: [
    {
      role: String,
      company: String,
      duration: String,
    },
  ],
  skills: [String],
  projects: [
    {
      title: String,
      description: String,
      link: String,
    },
  ],
}, { timestamps: true });

module.exports = mongoose.model("Resume", resumeSchema);
