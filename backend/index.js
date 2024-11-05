const express=require("express");
const cors=require("cors");
const app=express();
const PORT=3000;
const mongoose=require("mongoose")
const mainRouter=require("./routes/index");
app.use(cors());
app.use(express.json());

// "mongodb+srv://saransh2002sharma:cJXvEMmiZckL4oTU@learningmongo.gl2pz.mongodb.net/",


mongoose.connect(
    "mongodb+srv://saransh2002sharma:cJXvEMmiZckL4oTU@paytm.gl2pz.mongodb.net/",
  ).then(()=>{console.log("mongodb connected")});


app.use("/api/v1",mainRouter);

app.listen(PORT,()=>{
    console.log("server started at ",PORT);
})