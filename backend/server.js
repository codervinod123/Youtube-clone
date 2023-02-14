const express=require("express");

const app=express();
require('dotenv').config();

require("./DB/connection");



app.use(express.json());
app.use(require("./routes/auth"));


app.get("/",(req,res)=>{
       res.send("Hello Vinod bhai");
})


const PORT=process.env.PORT;
app.listen(PORT,()=>{
       console.log(`listening on port number ${PORT}`)
})


