const express = require('express');
const app = express();

app.set('view engine', 'pug');
  
app.get('/', (req, res) => {
  let ip = req.headers['x-forwarded-for'];
  let lang = req.headers['accept-language'].split(',')[0];
  let software = req.headers['user-agent'].slice(req.headers['user-agent'].indexOf('(') + 1, req.headers['user-agent'].indexOf(')'));
  console.log(req.headers);
  res.render('index', { ip, lang, software });
});

app.listen(process.env.PORT || 5000);