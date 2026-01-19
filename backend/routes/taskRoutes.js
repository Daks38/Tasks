const express = require("express");
const Task = require("../models/Tasks");

const router = express.Router();

//Find all Tasks
router.get("/", async (req, res) => {
  try {
    const allTasks = await Task.find().sort({ createdAt: -1 });
    res.status(200).json(allTasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//Find tasks by id
router.get("/:id", async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) {
      return res
        .status(404)
        .json({ msg: "Cet id ne correspond à aucune tâche" });
    }
    res.status(200).json(task);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

//Create Tasks
router.post("/", async (req, res) => {
  try {
    if (!req.body.title) {
      return res.status(400).json("Renseignez le champs titre ");
    }
    if (!req.body.content) {
      return res.status(400).json("Renseignez le champs description ");
    }
    if (!req.body.ownerId) {
      return res.status(400).json("Renseignez le champs id unique ");
    }

    const newTasks = new Task({
      title: req.body.title,
      content: req.body.content,
      ownerId: req.body.ownerId,
    });

    const registed = await newTasks.save();
    res.status(201).json({ task: registed, msg: "Tâche créée avec succès" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

//Update Tasks
router.put("/:id", async (req, res) => {
  try {
    const updateTasks = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res
      .status(200)
      .json({ task: updateTasks, msg: "Tâche mise à jour avec succès" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//Delete tasks by id
router.delete("/:id", async (req, res) => {
  const userId = req.headers["x-user-id"];
  try {
    const delTask = await Task.findById(req.params.id);
    if (!delTask) {
      return res.status(404).json({ msg: "Cet id n'existe plus" });
    }
    if (delTask.ownerId !== userId) {
      return res.status(403).json({ msg: "Action interdite" });
    }
    await delTask.deleteOne();
    res.status(200).json({ msg: "Tâche supprimée avec succès." });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
