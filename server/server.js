const express = require('express')
const app = express()
const port = 3000
const db=require("./db.js");
const usermodel = require('./model/usermodel.js');



app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  if (req.method === 'OPTIONS') return res.sendStatus(200);
  next();
});


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post("/register",async (req,res)=>{
  
  const {name,email,password}=req.body;

  const user=await usermodel.create({name,email,password});


  res.status(200).json({message:"user created",user});
})
app.post("/login",async (req,res)=>{
  
  const {email,password}=req.body;

  const user=await usermodel.findOne({email});

  if(user.password==password){

    res.status(200).json({message:"user verified",user});
  }

  res.status(401).json({message:"Please enter correct email and password!"});


})


app.get("/users",async (req,res)=>{
  

  const user=await usermodel.find();

  if(user.length!=0){

    res.status(200).json({user});
  }



})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
