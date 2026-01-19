const  express = require('express')
const connectDB = require('./Database/mongo')
const router = require('./routes/taskRoutes')
const cors = require('cors')
require('dotenv').config()

const app = express();
connectDB();
app.use(cors())
app.use(express.json()) 
app.use("/tasks",router)

app.get("/", (req, res)=>{
    res.send("Tout fonctionne bien ici")
})
// module.exports = app;
app.listen(process.env.PORT, ()=>console.log(`Vous êtes connecté sur http://localhost:${process.env.PORT}`))