const express = require("express");
const app = express(); 
const dotenv = require("dotenv");
const mongoose = require("mongoose"); 


dotenv.config();
mongoose.connect(process.env.DATABASE_ACCESS, {useUnifiedTopology: true, useNewUrlParser: true}, () => console.log("Database connected!!!") )

app.use(express.json()); 
const PORT = process.env.PORT || 4000



app.listen(PORT, () => {
    console.log("Server connected at port " + PORT)
})