var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/authenticate1', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  // var uname = document.getElementById('txtUserName').value;
  // var pass = document.getElementById('txtPassword').value;
  //if(uname!='' && pass!=''){
    console.log('Authenticated.....abc');
   // res.send('yes');
    //res.setHeader('Content-Type', 'application/json');
    //res.send(JSON.stringify({ flag : true }));
    res.json( 
      
      { 
        "flag" : true, 
        "role" : "admin",
        "firstName" : "Nikhil"  
      }
    );
   // res.json({"foo": "bar"});
  //}
});




module.exports = router;
