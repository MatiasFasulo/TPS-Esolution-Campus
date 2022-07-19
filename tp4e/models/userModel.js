const mongoose = require("mongoose");
const {
    Schema
} = mongoose;
const userSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    username: {
        required: true,
        type: String
    },
    email: {
        required: true,
        type: String
    },
    company: {
        type: Schema.Types.ObjectId,
        ref: "Company"
    }
});

module.exports = mongoose.model("User", userSchema);