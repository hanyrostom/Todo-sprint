//require
var mysql =require('mysql');
//configure
var db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'plantlife',
  database : 'todos'
});
//connnect
db.connect(() => console.log('connected'));

// db.on('error',(err)=>{
//     console.log('error connecting', err)
// })

// db.once(() => console.log('CONNECTED DATABASE'))


var save = (data,cb)=>{
    console.log('in save')
    var queryStr= `INSERT INTO things(task,status) VALUES(?,?)`
    var params = [data.task, data.status]
    db.query(queryStr,params,(err,data)=>{
        if(err) cb(err);
        else cb(null,data)
    })
}

var remove = (data,cb)=>{
    var queryStr= ``

    db.query(queryStr,(err,data)=>{
        if(err) cb(err);
        else cb(true)
    })

}

var getAll = (cb)=>{
    var queryStr= ``

    db.query(queryStr,(err,data)=>{
        if(err) cb(err);
        else cb(null,data)
    })

}



//helpers
//module.exports
module.exports = { 
    getAll,
    remove,
    save
}



