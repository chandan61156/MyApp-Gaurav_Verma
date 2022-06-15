var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'KCC Institude Of Technology And Managament' });
  // console.log(req)
  // res.json({name:"Gaurav Verma"})
});

router.post('/signup', (req, res) => {
  var em = req.body.emailInput;
  res.render('index', { email: em, name: req.body.nameInput, title: "Product Based Company" });
});

module.exports = router;
