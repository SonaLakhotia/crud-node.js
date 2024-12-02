const mongoose = require("mongoose");

const newsSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is a required field"]
    },
    content: {
        type: String,
        required: [true, "Content is a required field"]
    }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("News", newsSchema);