const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
    }, 
    email:{
        type:String,
        required:true,
    },
    phone:{
        type:Number,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
});

userSchema.pre("save", async function(next){
    const user = this;
    if(!user.isModified("password")){
        next();
    }
    try{
        const saltRound = 10;
        const hash_password = await bcrypt.hash(user.password, saltRound);
        user.password = hash_password;
    }
    catch(error){
        next(error);
    }
});

userSchema.methods.generateAuthToken = async function(){
    try{
        return jwt.sign({
            userId: this._id.toString(),
            email: this.email
        },
        process.env.JWT_SECRET_KEY,
        {
            expiresIn: "20d"
        }
    )
    }
    catch(error){
        console.log(error);
    }
}

const User = new mongoose.model("User", userSchema);

module.exports = User;