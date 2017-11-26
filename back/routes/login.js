var express = require('express');
var router = express.Router();
var neo4j = require('neo4j');

var db = new neo4j.GraphDatabase('http://neo4j:ukcuf@localhost:7474');

/* GET users listing. */
router.post('/', function(req, res, next) {
  db.cypher({
        
        query: 'MATCH (n:users) WHERE n.email={email} return n',
        params: {
            email: req.body.email
        },
    },function (err, results) {
        if (err) throw err;
        var result = results[0];
        if(results.length){
          if(result.n.properties.password == req.body.password){
            res.send({
              "code":200,
              "success":"login sucessfull"
                });
          }
          else{
            res.send({
              "code":204,
              "success": "password does not match"
                });
          }
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
