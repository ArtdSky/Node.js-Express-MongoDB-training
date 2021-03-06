const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const app = express();
const db = require('./config/db')
const port = 8000;

app.use(bodyParser.urlencoded({ extended: true}));

MongoClient.connect(db.url, (err, client)=>{
    var database = client.db('usersbase');
    if(err) return console.log(err)
    require('./app/routes')(app, database);
    app.listen(port, ()=>{
    console.log('Сервер запущен на '+ port);
});
})


