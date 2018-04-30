var express = require('express');
var router = express.Router();
var neo4j = require('neo4j');
var bcrypt = require('bcrypt');

var db = new neo4j.GraphDatabase('http://neo4j:ukcuf@localhost:7474');

/* GET users listing. */
router.post('/', function(req, res, next) {
    bcrypt.hash(req.body.password, 5, function( err, bcryptedPassword) {
        var t = bcryptedPassword;
        db.cypher({
        query: 'CREATE (n:users { firstName: {firstName}, lastName: {lastName},'+
                'email: {email}, password: {password}, birthdate: {birthdate}, sex: {sex}})',
        params: {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: t,
            birthdate: req.body.birthdate,
            sex: req.body.sex,
        },
    }, function (err, results) {
        if (err) {
            res.send({
            "code":400,
            "failed":"error ocurred"
            })
        }
        else if (!results) {
            console.log('No user found.');
        } else {
            res.send({
            "code": 200,
            "success": "user registered sucessfully"
            });
        }
    });
});
    });
    
module.exports = router;
