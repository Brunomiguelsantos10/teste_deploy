const express = require("express");
const app = express();
app.use(express.json())
require('dotenv').config()
const PORT = process.env.PORT
app.get("/", (req,res) => {
    res.send("<h1>Ola Bruno</h1>")
})
app.listen(PORT,()=>{
    console.log(`Servidor rodando na porta ${PORT}`)
})
