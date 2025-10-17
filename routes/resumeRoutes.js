const express = require("express");
const router = express.Router();
const protect = require("../middleware/authMiddleware");
const { createResume, getUserResumes, updateResume, deleteResume } = require("../controllers/resumeController");

router.post("/", protect, createResume);
router.get("/", protect, getUserResumes);
router.put("/:id", protect, updateResume);
router.delete("/:id", protect, deleteResume);

module.exports = router;
