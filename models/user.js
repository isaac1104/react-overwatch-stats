const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    bnetId: String
});

const User = mongoose.model("users", UserSchema);
module.exports = User;
