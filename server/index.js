var express = require('express');
var axios = require('axios');
var bodyParser = require('body-parser');
var app = express();
var path = require('path')
var {save} = require('../database/index')

app.use('/', express.static(path.join(__dirname, '../client/dist')))
app.use(bodyParser.json());


app.get('/tasks',(req,res)=>{

})



app.post('/save',(req,res)=>{
    console.log('server here~', req.body)
    save({task:"hany55658!",status: 'in progress'},(err, data)=>{
    console.log('saved', err, data);
}
)
})








app.listen(3000,()=>console.log('Listening on port 3000'));