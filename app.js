const express=require("express")
const mongoose = require("mongoose")
const cors=require("cors")
const{ turfmodel } = require("./models/turf")

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://sonalazar:9633591213@cluster0.zs9tqxx.mongodb.net/turfdb?retryWrites=true&w=majority&appName=Cluster0")

app.post("/add",(req,res)=>{
    let input =req.body
    let turf = new turfmodel(input)
    turf.save()
    console.log(turf)
    res.json({"status":"success"})
})

app.listen(8082,()=>{
    console.log("SERVER STARTED")
})