const express = require('express');
const app = express();
const path = require('path');

app.get('/', function(req, res) {
  if (process.env.NODE_ENV === 'development') {
    res.sendFile(path.join( __dirname, 'dev.html'));
  }
  else {
    res.sendFile(path.join( __dirname, 'prod.html'));
  }
});



app.use('/', express.static('dist'));

app.listen(process.env.PORT || 4000);
