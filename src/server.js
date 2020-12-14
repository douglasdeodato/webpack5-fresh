const express = require('express');
const app = express();

app.get('/', function (req, res){
    res.send('some dummy content');
});

app.listen(3000, function(){
    console.log('we are runnig in http://localhost:3000')
})