const express = require('express')
const routes = require('./routes')
const app = express()
require("dotenv").config();
const port = process.env.PORT
const mongoose = require('mongoose')
const db_login = process.env.DB_LOGIN
const db_password = process.env.DB_PASSWORD
const url = `mongodb+srv://${db_login}:${db_password}@authproject.fmgfb.gcp.mongodb.net/authproject?retryWrites=true&w=majority`;
mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
const db = mongoose.connection
db.once('open', _ => {
  console.log('Database connected:', url)
})

db.on('error', err => {
  console.error('connection error:', err)
})
app.use(express.json()); // ensinando ao express para utilizar formato json
app.use(routes);
app.use((error, req, res, next) => {
  
  res.status(error.httpStatusCode).json(error.message);
});
app.listen(port, () => {
    console.log (`Rodando o aplicativo em localhost:${port}`)
})