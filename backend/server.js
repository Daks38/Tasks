const  express = require('express')
require('./Database/mongo')
// const router = require('./routes/taskRoutes')
const Task = require("./models/Tasks");
const cors = require('cors')
require('dotenv').config()

const app = express();
const router = express.Router();
app.use(cors())
app.use(express.json()) 
app.use("/tasks",router)

app.get("/", (req, res)=>{
    res.send("Tout fonctionne bien ici")
})
//Find all Tasks
router.get("/", async (req, res) => {
  try {
    const allTasks = await Task.find();
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
      return res.status(404).json({ msg: "Cet id ne correspond à aucune tâche" });
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

    const newTasks = new Task({
      title: req.body.title,
      content: req.body.content,
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
    res.status(200).json({ task: updateTasks, msg: "Tâche mise à jour avec succès" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

//Delete tasks by id
router.delete("/:id", async (req, res) => {
  try {
    const delTask = await Task.findByIdAndDelete(req.params.id);
    if (!delTask) {
      return res.status(404).json({ msg: "Cet id n'existe plus" });
    }
    res.status(200).json({ msg: "Tâche supprimée avec succès." });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
// module.exports = app;
app.listen(process.env.PORT, ()=>console.log(`Vous êtes connecté sur http://localhost:${process.env.PORT}`))