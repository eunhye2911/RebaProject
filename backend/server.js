const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors')();

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json()); //axios 통신시 반드시 필요
app.use(cors);

const user = [
    {username : 'admin', userpass : '1234'},
    {username : 'aaa', userpass : '0000'},
    {username : 'bbb', userpass : '1111'}
    
];

app.post('/login', function(req, res) {
//    console.log(req.body)
    
    if(user[0].username == req.body.username 
       && user[0].userpass == req.body.userpass)
        res.json({success : 1, message : 'login success'});
    
    else {
        for(i = 0; i < user.length -1; i++) {
            if(user[i + 1].username == req.body.username 
               && user[i + 1].userpass == req.body.userpass){
                isTrue = true;
                res.json({success : 1, message : 'go to Member'});
                break;
                
            }
                                
        }
        
        if(isTrue == false)
            res.json({success : 2, message : 'go to NotMember'});
        
    }
    
});

const companyList = require('./data');

app.get('/company', function(req, res) {
    res.json(companyList);
    
});

const server = app.listen(4000);