const express = require("express");
const app = express(); 
const dotenv = require("dotenv");
const mongoose = require("mongoose"); 
bodyParser	= require('body-parser');
const ejs   = require("ejs");
InternURL   = require("./routes/router")
ContactURl = require("./routes/contactUs")


dotenv.config();
mongoose.connect(process.env.DATABASE_ACCESS, {useUnifiedTopology: true, useNewUrlParser: true}, () => console.log("Database connected!!!") )

app.set('view engine', 'ejs');
app.set("view engine", "ejs");        
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.json()); 
app.use("/interns", InternURL)
app.use("/contact", ContactURl)
const PORT = process.env.PORT || 4000



app.listen(PORT, () => {
    console.log("Server connected at port " + PORT)
})