var express = require('express');
var router = express.Router();
var neo4j = require('neo4j');

var db = new neo4j.GraphDatabase('http://neo4j:ukcuf@localhost:7474');

/* GET users listing. */
router.post('/', function(req, res, next) {
    db.cypher({
        
        query: 'CREATE (n:users { firstName: {firstName}, lastName: {lastName},'+
                'email: {email}, password: {password}, birthdate: {birthdate},sex: {sex}})',
        params: {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password,
            birthdate: req.body.birthdate,
            sex: req.body.sex    
        },
    }, function (err, results) {
        if (err) throw err;
        var result = results[0];
        res.send({
            "code":400,
            "failed":"error ocurred"
            })
        if (!result) {
            console.log('No user found.');
        } else {
            res.send({
            "code": 200,
            "success": "user registered sucessfully"
            });
        }
    });
});

module.exports = router;
