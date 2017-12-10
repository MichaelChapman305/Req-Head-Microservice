const express = require('express');
const app = express();

app.set('view engine', 'pug');
  
app.get('/', (req, res) => {
  let ip = req.headers['x-forwarded-for'];
  let lang = req.headers['accept-language'].slice(0, 5);
  let software = req.headers['user-agent'].slice(13, 40);
  console.log(req.headers);
  res.render('index', { ip, lang, software });
});

app.listen(process.env.PORT || 5000);