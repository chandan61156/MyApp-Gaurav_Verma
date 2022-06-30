var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var con = mysql.createPool({
  connectionLimit: 1000,
  host: 'easylearning.guru',
  user: 'kcc_student',
  password: 'Kccitm.edu.in1',
  database: 'kccStudent'
});

/* GET home page. */
router.get('/', function (req, res, next) {
  // res.render('index', { title: 'Express' });
  con.getConnection(function (err, connection) {
    connection.query("SELECT * FROM  ritik_ct ORDER BY id", function (err, results) {
      if (err) throw err;
      else console.log(results);
      res.render('index', { "data": results, title: 'express' });
    });
  });
});

router.post('/add', function (req, res, next) {
  var x = parseInt(req.body.a);
  var y = parseInt(req.body.b);
  var z = parseInt(req.body.c);
  var op = "+";
  var total = x + y + z;
  res.json(total)
  console.log(total);
  con.getConnection(function (err, connection) {
    connection.query("INSERT INTO ritik_ct (num1, num2 , num3, op, res) VALUES ('" + x + "', '" + y + "', '" + z + "', '" + op + "','" + total + "')", function (err, rows) {
      connection.release();
      if (err) throw err;
      else console.log(rows.length);
    });
  });
})

router.post('/mul', function (req, res, next) {
  var x = parseInt(req.body.a);
  var y = parseInt(req.body.b);
  var z = parseInt(req.body.c);
  var op = "*";
  var total = x * y * z;
  res.json(total)
  console.log(total);
  con.getConnection(function (err, connection) {
    connection.query("INSERT INTO ritik_ct (num1, num2 , num3, op, res) VALUES ('" + x + "', '" + y + "', '" + z + "', '" + op + "','" + total + "')", function (err, rows) {
      connection.release();
      if (err) throw err;
      else console.log(rows.length);
    });
  });
})

router.post('/delete', function (req, res, next) {
  console.log(req.body.id)
  con.query("DELETE FROM ritik_ct where id =" + req.body.id, function (err, result) {
    if (err) res.json({ code: 0 });
    console.log(result);
    res.json({ code: 1 })
  });
});

router.post('/totalsum', function (req, res, next) {
  console.log(req.body)
  con.getConnection(function (err, connection) {
    connection.query("SELECT * FROM  ritik_ct", function (err, results) {
      if (err) throw err;
      else console.log(results);
      res.json(results)
    });
  });
});

module.exports = router;