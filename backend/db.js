const mongoose=require("mongoose")
// mongoose.connect(
//     "mongodb+srv://saransh2002sharma:cJXvEMmiZckL4oTU@learningmongo.gl2pz.mongodb.net/",
//   ).then(()=>{console.log("mongodb connected")});


const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        minLength:3,
        maxLength:30
    },
    password:{
        type:String,
        required:true,
        minLength:6
    },
    firstName:{
        type:String,
        required:true,
        maxLength:30
    },
    lastName:{
        type:String,
        required:true,
        maxLength:30
    }
})

const accountSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId, // Reference to User model
        ref: 'User',
        required: true
    },
    balance: {
        type: Number,
        required: true
    }
});

const User=mongoose.model("User",userSchema);
const Account=mongoose.model("Account",accountSchema);
module.exports={User,Account};