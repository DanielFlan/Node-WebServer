const express = require('express')
require('dotenv').config();
const app = express()
const port = process.env.PORT;
// app.use(express.static('public'))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/Index.html')
})

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html')
  })

app.listen(port, () => {
    console.log(`Aplicacion corriendose en http://localhost:${port}`);
})