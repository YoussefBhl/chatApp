var express = require('express');
var router = express.Router();
var neo4j = require('neo4j');
var bcrypt = require('bcrypt');
let jwt = require('jsonwebtoken');

var db = new neo4j.GraphDatabase('http://neo4j:ukcuf@localhost:7474');

/* GET users listing. */
router.post('/', function(req, res, next) {
    db.cypher({   
          query: 'MATCH (n:users) WHERE n.email={email} return n',
          params: {
              email: req.body.email
          },
      },function (err, results) {
        console.log(results)
        let result = results[0];
          if (err) {
            res.send({
            "code":400,
            "failed":"error ocurred"
            })
          }
          else if(results.length){
          bcrypt.compare(req.body.password, result.n.properties.password, function(err, doesMatch){
              if (doesMatch){
              let token = jwt.sign(result, global.config.jwt_secret, {
            expiresIn: 1440 // expires in 1 hour
        });
        res.json({"code":200, token: token});
            }
            else{
              res.send({
                "code":204,
                "success": "password does not match"
                  });
            }
          });
          }
          else{
            res.send({
              "code":204,
              "success":"Email does not exits"
                });
          }
    });
});

module.exports = router;
