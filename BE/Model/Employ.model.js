const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
   first_name: String,
   last_name: String,
      email: String,
      department: String,
      salary: Number,

    
},{
    versionKey: false
});


const UsersModel = mongoose.model("users", UserSchema);


module.exports = {
   UsersModel
}