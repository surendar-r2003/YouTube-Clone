import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    email: {type:String , require: true},
    name: {type:String},
    desc:{type:String},
    joinedOn:{type:Date,default:Date.now}
})

export default mongoose.model("User",userSchema)
// import mongoose from "mongoose";

// const userSchema = mongoose.Schema({
//   email: { type: String, required: true },
//   name: { type: String },
//   desc: { type: String },
//   joinedOn: { type: Date, default: Date.now },
//   password: { type: String, required: true },
//   points: { type: Number, default: 0 },
// });

// export default mongoose.model("User", userSchema);