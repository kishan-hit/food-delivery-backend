const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/config');
// const morgan = require('morgan');
const userRoutes = require('./routes/user');
const authRoutes = require('./routes/auth');
const cors = require("cors")
require("colors");

// config dotenv
dotenv.config()

// connection mongodb
connectDB();

const app = express();

// middleware
app.use(express.json());
// app.use(morgan('dev'));
app.use(cors())

// route
// app.use("/api/pizzas", require("./routes/pizzaRoute"));
// app.use("/api/users",require("./routes/userRoutes"));
// app.use("/api/orders",require("./routes/orderRoute"));
app.use("/api/items",require("./routes/itemRoute"));
app.use("/api/restaurant",require("./routes/restaurantRoute"));
app.use("/api/users",userRoutes);
app.use("/api/auth",authRoutes);
app.get("/",(req,res)=>{
    res.send('<h1>Hello from node server by nodemon</h1>');
})

const port = process.env.PORT || 8080
app.listen(port,()=>{ 
    console.log(`Server running on ${process.env.NODE_ENV} mode on port no ${process.env.PORT}`.bgMagenta.white);
});

