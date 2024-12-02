const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username:{
        type: String,
        required: [true, "name should be present"]
    },
    password: {
        type: String,
        required: [true, "password should be present"]
    }
    },
    {
        timestamp: true
    }
);

module.exports = mongoose.model("User", userSchema);