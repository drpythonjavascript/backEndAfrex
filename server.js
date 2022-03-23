require("dotenv").config()
const express = require("express")
const app = express()
const port = process.env.PORT || 8005
app.get("/", (req, res)=>{
    
res.send("This Is Amazing FUCK!!!")
    
})
app.get("/api", (req, res)=>{
    
    res.send("Smashing that API URI resource")
    console.log("api URI was hit so a resource is being requested ")
    })
    


app.listen(port, ()=>{
    console.log(`${port} we are are connected to the server, it's LITTY!`)
})