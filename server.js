const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/config');
const morgan = require('morgan');
require("colors");

// config dotenv
dotenv.config()

// connection mongodb
connectDB();

const app = express();

// middleware
app.use(express.json());
app.use(morgan('dev'));

// route
app.get('/',(req,res)=>{
    res.send('<h1>Hello from node server by nodemon</h1>');
})

const port = process.env.PORT || 8080
app.listen(port,()=>{
    console.log(`Server running on ${process.env.NODE_ENV} mode on port no ${process.env.PORT}`.bgMagenta.white);
});