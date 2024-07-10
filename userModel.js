import mongoose from "mongoose";
mongoose.connect(`mongodb+srv://root:root@anonymessage.sx3fsbh.mongodb.net/?retryWrites=true&w=majority&appName=anonyMessage`);

const userSchema=mongoose.Schema({
    name:String,
    email:String,
    password:String,
})

let model=mongoose.model("user",userSchema);
export default model;


