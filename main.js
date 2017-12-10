const express = require('express');
const app = express();

app.set('view engine', 'pug');

app.get('/', (req, res) => {
  console.log(req.connection.remoteAddress);
  res.render('index');
});

app.listen(process.env.PORT || 5000);