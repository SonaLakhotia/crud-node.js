const express = require('express');
const errorHandler = require('./middleware/errorHandler');
const connectDB = require('./config/connectDB');
const dotenv = require('dotenv').config();

connectDB();
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use('/api/news', require('./routes/crudRoutes'));
app.use('/api/user', require('./routes/userRoutes'));
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});