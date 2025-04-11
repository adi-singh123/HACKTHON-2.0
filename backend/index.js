const dotenv =  require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const port = process.env.PORT || 8000;
dotenv.config();
const app = express();
const url = process.env.MONGODB_URI;
// app.use(express.urlencoded({ extended: true }));


app.use(cors());
app.use(express.json());
const {Register} =require("./models/register")

app.get("/allstudent",async(req,res)=>{
  res.send("hii")
})


app.post("/register",async(req ,res)=>{
  try {
    const newEntry = new Register(req.body);
    await newEntry.save();
    res.status(200).json({ message: "Registration saved!" });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong", error });
  }
})




app.listen(port, () => {
  console.log( `server is runing on ${port}`);
  mongoose.connect(url);
  console.log("db is connect");
});