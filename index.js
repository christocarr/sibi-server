const express = require('express');
const fs = require('fs');
const readline = require('readline');
const { google } = require('googleapis');
const request = require('request');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.send('Hi');
});

//testing ejs
app.get('/test', (req, res) => {
  res.render('test');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
