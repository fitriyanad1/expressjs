const express = require('express');
const mysql = require('mysql');


const app = express();
app.use(express.static('public'))
app.use(express.static('public/font'))


const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'tes-laravel'
});

connection.connect((err) => {
  if (err) {
    console.log('error connecting: ' + err.stack);
    return;
  }
  console.log('success');
});

app.get('/', (req, res) => {
  connection.query(
    'SELECT * FROM users',
    (error, results) => {
      console.log(results);
      res.render('index.ejs');
    }
  );
});

app.listen(3000);