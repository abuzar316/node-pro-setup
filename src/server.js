const express = require("express");

const { connect } = require('./database/connection');

// import master Route from rotes
const masterRoutes = require('./routes/masterRoutes');

// env file config
require('dotenv').config();

connect()
// run express
const app = express();
const PORT = process.env.PORT || 4000;


// middleware use
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// route use
app.use(masterRoutes);






app.listen(PORT, () => console.log(`Server is Running on Port ${PORT}`));