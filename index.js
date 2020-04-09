const express = require('express');
// const fs = require('fs');
// const readline = require('readline');
// const { google } = require('googleapis');
// const request = require('request');
const { GoogleSpreadsheet }  = require('google-spreadsheet');
const creds = require('./sibi-client-secret.json');
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

//testing google sheet
app.get('/sheet', async (req, res, next) => {
  try {
    const doc = new GoogleSpreadsheet('19mWvaXqVX6HM0FZszn4CBNCauDy9IF0vlL6j6BnZXKc');
    await doc.useServiceAccountAuth(creds)
    doc.getCells(1, callback)
    function callback(err, rows) {
      console.log(err)
      console.log(rows)
    }
    // await doc.loadInfo()
    // console.log(doc.title)
    // const data = await doc.sheetsByIndex[0]
    // console.log(data)
    // const cells = await doc.loadCells('B1:BP1605')
    // console.log(cells)
  } catch (err) {
    console.log(err)
  }  
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
