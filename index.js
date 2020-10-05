const express = require("express");
const messages = require("./app/messages");
const db = require('./fileDB');
const app = express();
const port = 8000;

db.init();

app.use(express.json());
app.use("/messages", messages);

app.listen(port, () =>{
    console.log('Server started');
});