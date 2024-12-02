const User = require("../models/user");
const asyncHandler = require("express-async-handler");
const bcrypt = require('bcrypt');

const registerUser = asyncHandler(async(req, res) => {
    // To check if user is already registered
    // To check if any field is missing
    // To hash the password
    const { username, password } = req.body;
    if(!username || !password){
        res.status(400);
        throw new Error("These fields are mandatory");
    }
    const userName = await User.findOne({ username });
    if(userName){
        res.status(400);
        throw new Error("User is already created, we cannot allow multiple articles from one user");
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
        username, password: hashedPassword
    }); 
    res.status(201).json({ message: "New user is registered"});
});

const loginUser = asyncHandler(async(req, res) => {
    res.json({ message: "this is funny"});
});

const currentUser = asyncHandler(async(req, res) => {
    res.json({ message: "this is funny too"});
});


module.exports = { registerUser, loginUser, currentUser};