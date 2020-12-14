const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

app.get('/page1/', function (req, res){
    const pathToHtmlFile = path.resolve(__dirname, '../dist/page1.html');
    const contentFromHtmlFile = fs.readFileSync(pathToHtmlFile, 'utf-8');
    res.send(contentFromHtmlFile);
});
app.get('/page2/', function (req, res){
    const pathToHtmlFile = path.resolve(__dirname, '../dist/page2.html');
    const contentFromHtmlFile = fs.readFileSync(pathToHtmlFile, 'utf-8');
    res.send(contentFromHtmlFile);
});

app.use('/static', express.static(path.resolve(__dirname, '../dist')));

app.listen(3000, function(){
    console.log('we are runnig in http://localhost:3000')
})