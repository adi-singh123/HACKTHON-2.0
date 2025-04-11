const mongoose = require("mongoose");
const {Schema}= require("mongoose");

const RegisterSchema = new Schema({
  leader: {
    name: String,
    email: String,
    phone: String,
    
    
  },
  members: [
    {
      name: String,
      phone: String,
    }
  ],
  idea: String,
});

const Register = mongoose.model("Register",RegisterSchema);

module.exports = {Register};