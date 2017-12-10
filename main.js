const express = require('express');
const app = express();

app.set('view engine', 'pug');

app.get('/', (req, res) =>{
  console.log(req.connection.remoteAddress);
});

app.listen(3000, () => {
  console.log('This app is running on Localhost:3000');
});