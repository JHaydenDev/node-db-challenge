const express = require("express");

const Tasks = require("./task-model.js");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const item = await Tasks.find();
    res.status(200).json({ message: "Got it", item });
  } catch (e) {
    res.status(500).json({ message: "Error", error: e.message });
  }
});

module.exports = router;
