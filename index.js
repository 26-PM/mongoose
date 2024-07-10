import express from "express";
import userModel from "./userModel.js"

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/create', async (req, res) => {
  let createduser=await userModel.create({
    name:"PM",
    email:"pm@gmail.com",
    password:"123"
  })
  res.send(createduser)
})

app.get('/read', async (req, res) => {
  let users=await userModel.find();
  res.send(users)
})

app.get('/update', async (req, res) => {
  let updateduser=await userModel.findOneAndUpdate({email:"pm@gmail.com"},{name:"PM"},{new:true});
  res.send(updateduser)
})

app.get('/delete',async(req,res)=>{
  let deleteduser=await userModel.findOneAndDelete({email:"pm@gmail.com"});
  res.send(deleteduser)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
