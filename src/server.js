const express = require('express')
const routes = require('./routes')
const app = express()
const port = 3000
const mongoose = require('mongoose')
const url = "mongodb+srv://admin:admin123@authproject.fmgfb.gcp.mongodb.net/authproject?retryWrites=true&w=majority";
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
app.listen(port, () => {
    console.log (`Rodando o aplicativo em localhost:${port}`)
})