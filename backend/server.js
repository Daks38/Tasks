const  express = require('express')
require('./Database/mongo')
const router = require('./routes/taskRoutes')
const cors = require('cors')
require('dotenv').config()

const app = express();
app.use(cors())
app.use(express.json()) 
app.use("/tasks-phi-nine.vercel.app",router)

app.get("/", (req, res)=>{
    res.send("Tout fonctionne bien ici")
})

app.listen(process.env.PORT, ()=>console.log(`Vous êtes connecté sur http://localhost:${process.env.PORT}`))