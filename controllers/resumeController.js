const Resume = require("../models/Resume");

// Create Resume
exports.createResume = async (req, res) => {
  try {
    const resume = await Resume.create({ ...req.body, userId: req.user._id });
    res.status(201).json(resume);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get All Resumes for Logged User
exports.getUserResumes = async (req, res) => {
  try {
    const resumes = await Resume.find({ userId: req.user._id });
    res.status(200).json(resumes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update Resume
exports.updateResume = async (req, res) => {
  try {
    const resume = await Resume.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(resume);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete Resume
exports.deleteResume = async (req, res) => {
  try {
    await Resume.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Resume deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
