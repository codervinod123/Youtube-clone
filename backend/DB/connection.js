const mongoose=require("mongoose");

mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log("Succesfully connected to database");
}).catch((error)=>{
    console.log(`Can not connected to database ${error}`);
})

