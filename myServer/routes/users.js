var express = require('express');
var router = express.Router();
const mysql = require('mysql');

const config = {
    host : 'localhost',
    port : 3306,
    user : 'root',
    password: 'root',
    database: 'tms'
};

var connection = mysql.createConnection(config);
connection.connect();

var users = {};

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});





router.post('/authenticate',function(req, res, next){
    console.log("inside authenticate");

    connection.query('select * from users where username = "'+ req.param('username') +'" and password = "' + req.param('password') + '" and isactive = true'
    ,function(err,result){
        if(err) { 
            console.log(err);
        }
        else{
            if(result.length > 0)
                 res.send(result);            
            else                
                 res.send([{'firstname' : 'No user found'}]);
            
        }
    });
});

router.post('/createUser',function(req, res, next){
    console.log("inside createUser "+req.param('userName'));

    connection.query(
      'insert into users values ( "' 
      + req.param("userName") + '","'
      + req.param("password") + '","' 
      + req.param("role") + '","' 
      + req.param("firstName") + '","'  
      + req.param("lastName")  + '",true)' 
      ,function(err,result){
        if(err) { 
            console.log(err);
        }
        else{
            console.log(result + ' inserted');
            res.send(result);
            /*if(result[0].count>0){
                console.log("true efdfdfdf");
            }else{
                console.log("false sdfsfsfsf");
            }*/
        }
    });
});

router.get('/viewUsers',function(req, res, next){
    console.log("inside viewUsers ");

    connection.query(
      'select * from users' 
      ,function(err,result){
        if(err) { 
            console.log(err);
        }
        else{
            console.log(result + ' selected');
            res.send(result);
            /*if(result[0].count>0){
                console.log("true efdfdfdf");
            }else{
                console.log("false sdfsfsfsf");
            }*/
        }
    });
});

router.post('/searchUsers',function(req, res, next){
    console.log("inside searchUsers " + req.param('searchT'));

    connection.query(
      'select * from users where username like "%' + req.param('searchT') + '%"'
      ,function(err,result){
        if(err) { 
            console.log(err);
        }
        else{
            console.log(result.length + ' selected');
            res.send(result);
            /*if(result[0].count>0){
                console.log("true efdfdfdf");
            }else{
                console.log("false sdfsfsfsf");
            }*/
        }
    });
});

router.post('/updateUserName',function(req, res, next){
    console.log("inside updateUserName hahahaha " + req.param('uName'));
    console.log("inside updateUserName hahahaha " + req.param('uId'));

    connection.query(
      'update users set username = "' + req.param('uName') + '" where firstname = "' + req.param('uId') + '"'
      ,function(err,result){
        if(err) { 
            console.log(err);
        }
        else{
            console.log(result.length + ' selected');
            
            connection.query(
            'select * from users' 
            ,function(err,result){
            if(err) { 
                console.log(err);
            }
            else{
                console.log(result + ' selected');
                res.send(result);           
            }
        });
            /*if(result[0].count>0){
                console.log("true efdfdfdf");
            }else{
                console.log("false sdfsfsfsf");
            }*/
        }
    });
});

router.post('/updateStatus',function(req, res, next){
    console.log("inside updateStatus " + req.param('status'));

    connection.query(
      'update users set isactive = ' + req.param('status') + ' where username = "' + req.param('uId') + '"'
      ,function(err,result){
        if(err) { 
            console.log(err);
        }
        else{
            console.log(result.length + ' selected');
            
            connection.query(
            'select * from users' 
            ,function(err,result){
            if(err) { 
                console.log(err);
            }
            else{
                console.log(result + ' selected');
                res.send(result);           
            }
        });
            /*if(result[0].count>0){
                console.log("true efdfdfdf");
            }else{
                console.log("false sdfsfsfsf");
            }*/
        }
    });
});

router.post('/updateRole',function(req, res, next){
    
    connection.query(
      'update users set role = "' + req.param('role') + '" where username = "' + req.param('uId') + '"'
      ,function(err,result){
        if(err) { 
            console.log(err);
        }
        else{
            console.log(result.length + ' selected');            
            connection.query(
            'select * from users' 
            ,function(err,result){
            if(err) { 
                console.log(err);
            }
            else{
                console.log(result + ' selected');
                res.send(result);           
            }
        });
            /*if(result[0].count>0){
                console.log("true efdfdfdf");
            }else{
                console.log("false sdfsfsfsf");
            }*/
        }
    });
});

router.post('/createTraining',function(req, res, next){

    console.log("inside create Trainer ");

    connection.query(
      'insert into training(title,department,audience,trainer,date,start_time,end_time,location,is_completed) values("' 
      + req.param("trainingtitle") + '","'
      + req.param("department") + '","' 
      + req.param("audience") + '","' 
      + req.param("trainer") + '","' 
      + req.param("tdate") + '","'       
      + req.param("startTime") + '","'
      + req.param("endTime") + '","'
      + req.param("location") + '", false)' 
      ,function(err,result){
        if(err) { 
            console.log(err);
        }
        else{
            console.log(result + ' inserted');
            connection.query(
                'select * from training' 
                        ,function(err,result){
                        if(err) { 
                            console.log(err);
                        }
                        else{
                            console.log(result + ' selected');
                            res.send(result);            
                        }
                        });            
        }
    });
});

router.get('/viewTraining',function(req, res, next){
    console.log("inside viewTraining ");

    connection.query(
      'select * from training' 
      ,function(err,result){
        if(err) { 
            console.log(err);
        }
        else{
            console.log(result + ' selected');
            res.send(result);            
        }
    });
});

router.post('/searchTraining',function(req, res, next){
    console.log("inside searchTraining " + req.param('searchT'));

    connection.query(
      'select * from training where title like "%' + req.param('searchT') + '%"'
      ,function(err,result){
        if(err) { 
            console.log(err);
        }
        else{
            console.log(result.length + ' selected');
            res.send(result);
            /*if(result[0].count>0){
                console.log("true efdfdfdf");
            }else{
                console.log("false sdfsfsfsf");
            }*/
        }
    });
});


router.post('/viewMyTraining',function(req, res, next){
    console.log("inside viewMyTraining "+req.param('userName'));

    connection.query(
      'select * from training where trainer = "' + req.param('userName') + '"' 
      ,function(err,result){
        if(err) { 
            console.log(err);
        }
        else{
            console.log(result + ' selected');
            res.send(result);            
        }
    });
});

router.post('/searchMyTraining',function(req, res, next){
    console.log("inside searchTraining " + req.param('searchT'));

    connection.query(
      'select * from training where trainer = "' + req.param('userName') + '" and title like "%' + req.param('searchT') + '%"'
      ,function(err,result){
        if(err) { 
            console.log(err);
        }
        else{
            console.log(result.length + ' selected');
            res.send(result);
            /*if(result[0].count>0){
                console.log("true efdfdfdf");
            }else{
                console.log("false sdfsfsfsf");
            }*/
        }
    });
});

router.get('/fetchTrainerList',function(req, res, next){
    console.log("inside fetchTrainerList ");

    connection.query(
      'select username from users where role = "trainer"'
      ,function(err,result){
        if(err) { 
            console.log(err);
        }
        else{
            console.log(result.length + ' selected');
            res.send(result);
            /*if(result[0].count>0){
                console.log("true efdfdfdf");
            }else{
                console.log("false sdfsfsfsf");
            }*/
        }
    });
});

router.post('/addScenario',function(req, res, next){

    console.log("inside create Trainer ");

    connection.query(
      'insert into scenario (scenario_name, iscovered, training_id) values("'
       + req.param("content") + '", false ,"' + req.param("trainingId") + '")' 
      ,function(err,result){
        if(err) { 
            console.log(err);
        }
        else{
            console.log(result + ' inserted');
            res.send(result);         
        }
    });
});

router.post('/viewScenario',function(req, res, next){
    console.log("inside viewScenario ");

    connection.query(
      'select * from scenario where training_id = "' + req.param("trainingId") + '"'
      ,function(err,result){
        if(err) { 
            console.log(err);
        }
        else{
            console.log(result + ' selected');
            res.send(result);            
        }
    });
});

router.post('/updateTrainingStatus',function(req, res, next){
    console.log("inside updateTrainingStatus " + req.param('status'));

    connection.query(
      'update training set is_completed = ' + req.param('status') + ' where training_id = "' + req.param('training_id') + '"'
      ,function(err,result){
        if(err) { 
            console.log(err);
        }
        else{
            console.log(result.length + ' selected');
            
            connection.query(
            'select * from training' 
            ,function(err,result){
            if(err) { 
                console.log(err);
            }
            else{
                console.log(result + ' selected');
                res.send(result);           
            }
        });           
        }
    });
});

router.post('/updateScenarioStatus',function(req, res, next){
    console.log("inside updateScenarioStatus " + req.param('status'));

    connection.query(
      'update scenario set iscovered = ' + req.param('status') + ' where scenario_id = "' + req.param('scenario_id') + '"'
      ,function(err,result){
        if(err) { 
            console.log(err);
        }
        else{
            console.log(result.length + ' selected');
            
            connection.query(
            'select * from scenario' 
            ,function(err,result){
            if(err) { 
                console.log(err);
            }
            else{
                console.log(result + ' selected');
                res.send(result);           
            }
        });           
        }
    });
});

module.exports = users;
module.exports = router;